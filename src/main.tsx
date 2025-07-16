import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./lib/supabaseClient";
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
    <SessionContextProvider supabaseClient={supabase}>
        <Router>
            <App />
        </Router>
    </SessionContextProvider>
);
