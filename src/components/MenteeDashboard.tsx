
import { Navigation } from './dashboard/Navigation';
import { MentorInfo } from './dashboard/MentorInfo';
import { DashboardCalendar } from './dashboard/DashboardCalendar';
import { UpcomingSchedule } from './dashboard/UpcomingSchedule';
import { ActionButtons } from './dashboard/ActionButtons';

const MenteeDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Mentor Info */}
          <div className="lg:col-span-1">
            <MentorInfo />
          </div>
          
          {/* Right Column - Calendar and Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardCalendar />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UpcomingSchedule />
              <ActionButtons />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenteeDashboard;
