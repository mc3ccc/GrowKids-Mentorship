
import { Navigation } from '@/components/dashboard/Navigation';
import { AdminStats } from '@/components/admin/AdminStats';
import { UserManagement } from '@/components/admin/UserManagement';
import { SessionOverview } from '@/components/admin/SessionOverview';
import { ReportsChart } from '@/components/admin/ReportsChart';
import { SystemSettings } from '@/components/admin/SystemSettings';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="admin" />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and management</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <AdminStats />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ReportsChart />
          <SessionOverview />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserManagement />
          <SystemSettings />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
