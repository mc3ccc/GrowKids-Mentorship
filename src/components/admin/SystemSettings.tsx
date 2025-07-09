
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings, Shield, Bell, Mail, Database } from 'lucide-react';

export const SystemSettings = () => {
  const settings = [
    {
      id: 'notifications',
      label: 'Email Notifications',
      description: 'Send automated email notifications',
      enabled: true,
      icon: Mail
    },
    {
      id: 'maintenance',
      label: 'Maintenance Mode',
      description: 'Enable system maintenance mode',
      enabled: false,
      icon: Settings
    },
    {
      id: 'security',
      label: 'Enhanced Security',
      description: 'Enable two-factor authentication',
      enabled: true,
      icon: Shield
    },
    {
      id: 'alerts',
      label: 'System Alerts',
      description: 'Real-time system monitoring alerts',
      enabled: true,
      icon: Bell
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">System Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {settings.map((setting) => {
            const IconComponent = setting.icon;
            return (
              <div key={setting.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <Label htmlFor={setting.id} className="text-sm font-medium">
                      {setting.label}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      {setting.description}
                    </p>
                  </div>
                </div>
                <Switch
                  id={setting.id}
                  checked={setting.enabled}
                  onCheckedChange={() => {}}
                />
              </div>
            );
          })}
          
          <div className="pt-4 space-y-2">
            <Button className="w-full" variant="outline">
              <Database className="h-4 w-4 mr-2" />
              Database Backup
            </Button>
            <Button className="w-full" variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Logs
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
