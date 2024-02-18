import { useEffect, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { LoginContext } from "../Context/Logincon";

// Create a single instance of supabase
const supabase = createClient(
  "https://fruwyrldqkxmnrojtobb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
);

const useSupabaseAuth = () => {
  const [session, setSession] = useContext(LoginContext);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data) {
          setSession(data.session);
        }
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };

    const handleAuthStateChange = (_event, newSession) => {
      setSession(newSession);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { session };
};

export default useSupabaseAuth;
