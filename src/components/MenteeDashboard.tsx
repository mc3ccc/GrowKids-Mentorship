
import { Navigation } from './dashboard/Navigation';
import { MentorInfo } from './dashboard/MentorInfo';
import { DashboardCalendar } from './dashboard/DashboardCalendar';
import { UpcomingSchedule } from './dashboard/UpcomingSchedule';
import { ActionButtons } from './dashboard/ActionButtons';
import { SubscriptionBanner } from './mentee/SubscriptionBanner';

interface MenteeDashboardProps {
  hasSubscription?: boolean;
}

const MenteeDashboard = ({ hasSubscription = false }: MenteeDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="mentee" />
      
      {!hasSubscription && <SubscriptionBanner />}
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Mentor Info */}
          <div className="lg:col-span-1">
            <MentorInfo hasSubscription={hasSubscription} />
          </div>
          
          {/* Right Column - Calendar and Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardCalendar />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UpcomingSchedule hasSubscription={hasSubscription} />
              <ActionButtons hasSubscription={hasSubscription} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenteeDashboard;
