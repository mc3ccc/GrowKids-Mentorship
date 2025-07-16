import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MentorDashboard from "./pages/MentorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import { PrimaryNavigation } from '@/components/layout/PrimaryNavigation';
import Homepage from "./pages/Homepage";
import MeetFounder from "./pages/MeetFounder";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./pages/UserProfile";
import SessionDetails from "./pages/SessionDetails";
import AdminLogin from "./pages/AdminLogin";
import { useSession } from "@supabase/auth-helpers-react";

const queryClient = new QueryClient();

const App = () => {
  const session = useSession();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PrimaryNavigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/meet-founder" element={<MeetFounder />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/mentor" element={<MentorDashboard />} />
            <Route
              path="/admin"
              element={session ? <AdminDashboard /> : <AdminLogin />}
            />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/session/:sessionId" element={<SessionDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
