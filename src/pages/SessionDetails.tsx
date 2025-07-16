import { Navigation } from '@/components/dashboard/Navigation';

const SessionDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="mentee" />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Session Details</h1>
          <p className="text-muted-foreground">Information about your upcoming session</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">React Best Practices</h2>
              <p className="text-gray-500">with John Doe</p>
            </div>
            <div>
              <p><strong>Date:</strong> August 20, 2024</p>
              <p><strong>Time:</strong> 10:00 AM - 11:00 AM</p>
            </div>
            <div>
              <h3 className="font-semibold">Participants</h3>
              <ul className="list-disc list-inside">
                <li>Jane Smith (Mentee)</li>
                <li>John Doe (Mentor)</li>
              </ul>
            </div>
            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Session
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SessionDetails;
