import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { createClient } from "@supabase/supabase-js";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
const supabase = createClient(
  "https://fruwyrldqkxmnrojtobb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
);
console.log(supabase.auth.getUser());
const users = supabase.auth.getUser();

const Home = () => {
  const [darks] = useContext(DarkContext);
  async function signout() {
    try {
      const { error } = await supabase.auth.signOut();
      console.log("sign out");
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log("Error signing out:", error.message);
    }
  }

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col justify-center items-center pl-5 pt-5 ${
          darks ? "bg-white text-black" : "bg-black text-white"
        } h-screen`}
      >
        <Link to="/aitool">Ai tool</Link>
        <Link to="/releqai">Releq Ai</Link>
        <Link to="/searchai">Search General AI</Link>
        <Link to="/searchreleqai">Search Releq AI</Link>

        <button onClick={signout}>Sign out</button>

        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
        <h1>{users.email}</h1>
      </div>
    </>
  );
};

export default Home;
