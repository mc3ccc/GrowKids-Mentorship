import { supabase } from './supabaseClient';

export const isAdmin = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return false;
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching user role:', error);
    return false;
  }

  return data?.role === 'admin';
};
