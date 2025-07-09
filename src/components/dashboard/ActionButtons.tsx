
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Video, Lock } from 'lucide-react';

interface ActionButtonsProps {
  hasSubscription?: boolean;
}

export const ActionButtons = ({ hasSubscription = false }: ActionButtonsProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <Button className="w-full" size="lg">
            <BookOpen className="h-4 w-4 mr-2" />
            View All Resources
          </Button>
          
          <Button 
            className="w-full" 
            variant="outline" 
            size="lg"
            disabled={!hasSubscription}
          >
            {hasSubscription ? (
              <Video className="h-4 w-4 mr-2" />
            ) : (
              <Lock className="h-4 w-4 mr-2" />
            )}
            {hasSubscription ? 'Join Premium Session' : 'Premium Feature'}
          </Button>
          
          {!hasSubscription && (
            <Button className="w-full" variant="secondary" size="lg">
              Upgrade to Premium
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
