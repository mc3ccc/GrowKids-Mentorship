
import MenteeDashboard from '@/components/MenteeDashboard';

const Index = () => {
  // This could be determined by authentication state or user preferences
  const hasSubscription = false; // Set to true to see premium features
  
  return <MenteeDashboard hasSubscription={hasSubscription} />;
};

export default Index;
