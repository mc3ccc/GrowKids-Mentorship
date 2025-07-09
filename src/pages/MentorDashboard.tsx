
import { Navigation } from '@/components/dashboard/Navigation';
import { MentorStats } from '@/components/mentor/MentorStats';
import { MenteesList } from '@/components/mentor/MenteesList';
import { UpcomingMentorSessions } from '@/components/mentor/UpcomingMentorSessions';
import { MentorCalendar } from '@/components/mentor/MentorCalendar';
import { MentorActions } from '@/components/mentor/MentorActions';

const MentorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="mentor" />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Mentor Dashboard</h1>
          <p className="text-muted-foreground">Manage your mentees and sessions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <MentorStats />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Mentees and Sessions */}
          <div className="lg:col-span-2 space-y-6">
            <MenteesList />
            <UpcomingMentorSessions />
          </div>
          
          {/* Right Column - Calendar and Actions */}
          <div className="space-y-6">
            <MentorCalendar />
            <MentorActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;
