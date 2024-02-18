import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../Context/DarkContext";
import useSupabaseAuth from "../Components/useSession";
import Navbar from "../Components/Navbar";
import supabase from "../Components/Supabase";

const Login = () => {
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [darks] = useContext(DarkContext);

  const { session } = useSupabaseAuth();
  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginemail,
        password: loginpassword,
      });

      if (error) {
        throw error;
      }

      console.log("Logged in successfully");
      // Redirect or handle successful login
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      {session ? (
        <div
          className={`flex flex-row justify-center items-center pl-5 pt-5 ${
            darks ? "bg-white text-black" : "bg-black text-white"
          } h-screen`}
        >
          <h1>You cant access this page right now</h1>
          <Link to="/" className="ml-5">
            Home
          </Link>
        </div>
      ) : (
        <div
          className={`flex flex-col justify-center items-center ${
            darks ? "bg-whtie " : "bg-black "
          } h-screen`}
        >
          <h1
            className={`font-bold mt-10 text-3xl ${
              darks ? "text-black " : "text-white "
            }`}
          >
            Login
          </h1>

          <input
            type="text"
            value={loginemail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Enter your Email"
            className="border px-5 py-5 mt-10 dark:border-white"
          />
          <input
            type="password"
            value={loginpassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Enter your Password"
            className="border px-5 py-5 mt-10 dark:border-white"
          />
          <Link to="/">
            <button
              onClick={handleLogin}
              className="mt-10 w-20 h-10 bg-blue-700 text-white flex justify-center items-center rounded-full"
            >
              Login
            </button>
          </Link>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </>
  );
};

export default Login;
