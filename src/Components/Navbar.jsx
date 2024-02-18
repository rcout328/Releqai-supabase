import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import DarkContext from "../Context/DarkContext";
import supabase from "./Supabase";
import { LoginContext } from "../Context/Logincon";
const Navbar = () => {
  const [darks, setDarks] = useContext(DarkContext);
  // eslint-disable-next-line no-unused-vars
  const [sessions, setSession] = useContext(LoginContext);
  const toggle = () => {
    setDarks(!darks);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign-out error:", error.message);
      } else {
        console.log("User signed out successfully");
        // You can redirect to a different page or perform other actions as needed
      }
    } catch (error) {
      console.error("Unexpected error during sign-out:", error.message);
    }
  };

  return (
    <div
      className={`flex flex-row ${
        darks ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Link to="/">
        <div
          className={`flex w-20 h-10 ${
            darks ? "bg-black text-white" : "bg-white text-black"
          } justify-center items-center ml-5 mt-5`}
        >
          Releqai
        </div>
      </Link>

      <div className="flex mt-7 absolute top-0 right-0 mr-10">
        {!sessions ? (
          <>
            <button onClick={toggle} className="pl-5">
              {darks ? "Light" : "Dark"}
            </button>
            <Link to="/login" className="ml-5">
              Login
            </Link>

            <Link to="/signup" className="ml-5">
              Signup
            </Link>
          </>
        ) : (
          <>
            <ul className="flex flex-row space-x-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aitool">Ai tool</Link>
              </li>
              <li>
                <Link to="/releqai">Releq Ai</Link>
              </li>
              <li>
                <Link to="/searchai">Search ai</Link>
              </li>
              <li>
                <Link to="/searchreleqai">Search Releqai</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/contact1">Contact1</Link>
              </li>
            </ul>
            <button onClick={toggle} className="pl-5">
              {darks ? "Light" : "Dark"}
            </button>
            <button onClick={signOut} className="ml-5">
              Signout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
