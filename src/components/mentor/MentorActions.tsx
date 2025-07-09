
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Users, Calendar, BookOpen, Settings } from 'lucide-react';

export const MentorActions = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-3">
          <Button className="w-full" size="lg">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Session
          </Button>
          
          <Button className="w-full" variant="outline" size="lg">
            <Users className="h-4 w-4 mr-2" />
            Add New Mentee
          </Button>
          
          <Button className="w-full" variant="outline" size="lg">
            <BookOpen className="h-4 w-4 mr-2" />
            Create Resource
          </Button>
          
          <Button className="w-full" variant="outline" size="lg">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
