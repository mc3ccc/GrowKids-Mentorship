
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Video } from 'lucide-react';

export const ActionButtons = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <Button className="w-full" size="lg">
            <BookOpen className="h-4 w-4 mr-2" />
            View All Resources
          </Button>
          
          <Button className="w-full" variant="outline" size="lg">
            <Video className="h-4 w-4 mr-2" />
            Join Session
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
