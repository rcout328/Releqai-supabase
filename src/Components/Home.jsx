// Home.js
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import useSupabaseAuth from "./useSession";
const Home = () => {
  const [darks] = useContext(DarkContext);
  const { session, signout } = useSupabaseAuth();

  return (
    <>
      <Navbar />
      {session ? (
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
          <h1>{session.user.email}</h1>
        </div>
      ) : (
        <div
          className={`flex flex-col justify-center items-center pl-5 pt-5 ${
            darks ? "bg-white text-black" : "bg-black text-white"
          } h-screen`}
        >
          <h1>Login to access app</h1>
        </div>
      )}
    </>
  );
};

export default Home;
