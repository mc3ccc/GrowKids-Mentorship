
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Briefcase, Lock } from 'lucide-react';

interface MentorInfoProps {
  hasSubscription?: boolean;
}

export const MentorInfo = ({ hasSubscription = false }: MentorInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Mentor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg" alt="Mentor" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">Sarah Mitchell</h3>
            <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground ml-1">4.9 (127 reviews)</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 mr-2" />
            <span>Tech Industry • 8 years experience</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Specializations:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Career Growth</Badge>
            {hasSubscription ? (
              <Badge variant="secondary">Leadership</Badge>
            ) : (
              <Badge variant="outline" className="opacity-50">
                <Lock className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            "Passionate about helping junior developers navigate their career path and build technical excellence."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
