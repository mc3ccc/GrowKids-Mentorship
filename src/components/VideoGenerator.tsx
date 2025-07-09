
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { Play, Download, Loader2, Video, AudioLines } from 'lucide-react';

interface VideoParams {
  scene: string;
  duration: number;
  voiceoverText: string;
  voiceStyle: string;
  voiceId: string;
  tone: string;
  accent: string;
  visualStyle: string;
  lighting: string;
  backgroundMusic: string;
}

const VideoGenerator = () => {
  const [videoParams, setVideoParams] = useState<VideoParams>({
    scene: "A late adolescent Nigerian girl in a UK school uniform walks quietly into a classroom of few students in ratio of 1 (Black kid) : 4 (English kids). She avoids eye contact and quietly takes a seat at the back.",
    duration: 5,
    voiceoverText: "She's adjusting… on the outside.",
    voiceStyle: "Nigerian early adult girl",
    voiceId: "9BWtsMINqrJLrRacOk9x", // Aria voice ID
    tone: "Emotional, vulnerable, slightly anxious at first",
    accent: "Authentic Nigerian - UK inflection, soft but expressive",
    visualStyle: "Cinematic, realistic",
    lighting: "Soft, natural lighting",
    backgroundMusic: "Calm and quiet"
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [elevenLabsKey, setElevenLabsKey] = useState('');

  const handleGenerate = async () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return;
    }

    if (!elevenLabsKey.trim()) {
      toast.error('Please enter your ElevenLabs API key');
      return;
    }

    setIsGenerating(true);
    
    try {
      // First generate the voiceover audio
      toast.info('Generating voiceover audio...');
      const audioResponse = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + videoParams.voiceId, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': elevenLabsKey
        },
        body: JSON.stringify({
          text: videoParams.voiceoverText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.5,
            use_speaker_boost: true
          }
        })
      });

      if (!audioResponse.ok) {
        throw new Error('Failed to generate audio');
      }

      const audioBlob = await audioResponse.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      setGeneratedAudio(audioUrl);
      toast.success('Voiceover generated successfully!');

      // Then generate the video frames
      toast.info('Generating video frames...');
      
      // Create detailed prompt for video generation
      const videoPrompt = `${videoParams.scene}. ${videoParams.visualStyle} style. ${videoParams.lighting}. High quality, detailed, realistic rendering. School classroom setting with authentic details.`;
      
      // For now, we'll generate a single frame as a placeholder
      // In a real implementation, you'd generate multiple frames for the video
      const imageResponse = await fetch('https://api.runware.ai/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          {
            taskType: "authentication",
            apiKey: apiKey
          },
          {
            taskType: "imageInference",
            taskUUID: crypto.randomUUID(),
            positivePrompt: videoPrompt,
            width: 1920,
            height: 1080,
            model: "runware:100@1",
            numberResults: 1,
            outputFormat: "WEBP"
          }
        ])
      });

      if (!imageResponse.ok) {
        throw new Error('Failed to generate video frame');
      }

      const imageData = await imageResponse.json();
      
      if (imageData.data && imageData.data.length > 0) {
        const frameData = imageData.data.find((item: any) => item.taskType === 'imageInference');
        if (frameData && frameData.imageURL) {
          setGeneratedVideo(frameData.imageURL);
          toast.success('Video frame generated successfully!');
        }
      }

    } catch (error) {
      console.error('Generation error:', error);
      toast.error('Failed to generate content. Please check your API keys and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Video className="w-8 h-8 text-purple-400" />
            AI Video Generator
          </h1>
          <p className="text-slate-300">Create compelling videos with synchronized voiceovers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AudioLines className="w-5 h-5 text-purple-400" />
                Video Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* API Keys */}
              <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg">
                <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wide">API Keys</h3>
                <div className="space-y-2">
                  <Label htmlFor="runware-key" className="text-slate-300">Runware API Key</Label>
                  <Input
                    id="runware-key"
                    type="password"
                    placeholder="Enter your Runware API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="elevenlabs-key" className="text-slate-300">ElevenLabs API Key</Label>
                  <Input
                    id="elevenlabs-key"
                    type="password"
                    placeholder="Enter your ElevenLabs API key"
                    value={elevenLabsKey}
                    onChange={(e) => setElevenLabsKey(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>

              {/* Scene Description */}
              <div className="space-y-2">
                <Label htmlFor="scene" className="text-slate-300">Scene Description</Label>
                <Textarea
                  id="scene"
                  placeholder="Describe the scene in detail..."
                  value={videoParams.scene}
                  onChange={(e) => setVideoParams(prev => ({ ...prev, scene: e.target.value }))}
                  className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                />
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <Label className="text-slate-300">Duration: {videoParams.duration} seconds</Label>
                <Slider
                  value={[videoParams.duration]}
                  onValueChange={(value) => setVideoParams(prev => ({ ...prev, duration: value[0] }))}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Voiceover Text */}
              <div className="space-y-2">
                <Label htmlFor="voiceover" className="text-slate-300">Voiceover Text</Label>
                <Textarea
                  id="voiceover"
                  placeholder="Enter the voiceover script..."
                  value={videoParams.voiceoverText}
                  onChange={(e) => setVideoParams(prev => ({ ...prev, voiceoverText: e.target.value }))}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              {/* Voice Selection */}
              <div className="space-y-2">
                <Label className="text-slate-300">Voice</Label>
                <Select value={videoParams.voiceId} onValueChange={(value) => setVideoParams(prev => ({ ...prev, voiceId: value }))}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="9BWtsMINqrJLrRacOk9x">Aria</SelectItem>
                    <SelectItem value="EXAVITQu4vr4xnSDxMaL">Sarah</SelectItem>
                    <SelectItem value="XB0fDUnXU5powFXDhCwa">Charlotte</SelectItem>
                    <SelectItem value="Xb7hH8MSUJpSbSDYk0k2">Alice</SelectItem>
                    <SelectItem value="cgSgspJ2msm6clMCkdW9">Jessica</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tone and Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tone" className="text-slate-300">Tone</Label>
                  <Input
                    id="tone"
                    placeholder="e.g., Emotional, vulnerable"
                    value={videoParams.tone}
                    onChange={(e) => setVideoParams(prev => ({ ...prev, tone: e.target.value }))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accent" className="text-slate-300">Accent</Label>
                  <Input
                    id="accent"
                    placeholder="e.g., Nigerian - UK inflection"
                    value={videoParams.accent}
                    onChange={(e) => setVideoParams(prev => ({ ...prev, accent: e.target.value }))}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>

              {/* Visual Style */}
              <div className="space-y-2">
                <Label htmlFor="visual-style" className="text-slate-300">Visual Style</Label>
                <Select value={videoParams.visualStyle} onValueChange={(value) => setVideoParams(prev => ({ ...prev, visualStyle: value }))}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="Cinematic, realistic">Cinematic, Realistic</SelectItem>
                    <SelectItem value="Documentary style">Documentary Style</SelectItem>
                    <SelectItem value="Artistic, stylized">Artistic, Stylized</SelectItem>
                    <SelectItem value="Natural, candid">Natural, Candid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Generate Video
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview Panel */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Video Preview */}
                {generatedVideo ? (
                  <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
                    <img 
                      src={generatedVideo} 
                      alt="Generated scene"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
                    <div className="text-center text-slate-400">
                      <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Video will appear here</p>
                    </div>
                  </div>
                )}

                {/* Audio Preview */}
                {generatedAudio && (
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <Label className="text-slate-300 mb-2 block">Generated Voiceover</Label>
                    <audio controls className="w-full">
                      <source src={generatedAudio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {/* Download Button */}
                {(generatedVideo || generatedAudio) && (
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Content
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoGenerator;
