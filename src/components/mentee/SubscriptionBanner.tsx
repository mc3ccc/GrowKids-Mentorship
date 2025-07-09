
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, X } from 'lucide-react';
import { useState } from 'react';

export const SubscriptionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="m-4 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Crown className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Upgrade to Premium</h3>
              <p className="text-sm text-muted-foreground">
                Unlock unlimited sessions, advanced resources, and priority support
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm">
              Upgrade Now
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setIsVisible(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
