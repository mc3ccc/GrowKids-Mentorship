
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-['Poppins']">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Poppins']">
            Have questions about GrowKIDs Mentorship? We'd love to hear from you! 
            Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-['Poppins']">Email Us</h3>
                    <p className="text-gray-600 font-['Poppins']">support@growkids.com</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-['Poppins']">
                  Send us an email and we'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-['Poppins']">Call Us</h3>
                    <p className="text-gray-600 font-['Poppins']">(123) 456-7890</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-['Poppins']">
                  Available Monday to Friday, 9 AM - 6 PM EST
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-['Poppins']">Visit Us</h3>
                    <p className="text-gray-600 font-['Poppins']">
                      123 Education St<br />
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-['Poppins']">
                  Our headquarters - visits by appointment only
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-['Poppins']">Office Hours</h3>
                    <p className="text-gray-600 font-['Poppins']">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-['Poppins']">
                  Eastern Standard Time (EST)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 font-['Poppins']">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600 font-['Poppins']">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="font-['Poppins']"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="font-['Poppins']"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="font-['Poppins']"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="font-['Poppins']"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 font-['Poppins']"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 font-['Poppins']">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 font-['Poppins']">
                  How do I get matched with a mentor?
                </h3>
                <p className="text-gray-600 text-sm font-['Poppins']">
                  After signing up, our matching algorithm considers your interests, goals, and preferences to connect you with the perfect mentor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 font-['Poppins']">
                  What's included in the free plan?
                </h3>
                <p className="text-gray-600 text-sm font-['Poppins']">
                  The free plan includes 1 session per month, access to basic resources, and community support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 font-['Poppins']">
                  How do I schedule sessions?
                </h3>
                <p className="text-gray-600 text-sm font-['Poppins']">
                  Use our integrated Calendly widget in your dashboard to book sessions with your mentor at mutually convenient times.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 font-['Poppins']">
                  Can I change my mentor?
                </h3>
                <p className="text-gray-600 text-sm font-['Poppins']">
                  Yes! If the match isn't quite right, contact our support team and we'll help you find a better fit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
