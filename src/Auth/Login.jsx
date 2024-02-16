import { useContext, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import DarkContext from "../Context/DarkContext";

const Login = () => {
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [darks] = useContext(DarkContext);

  const supabase = createClient(
    "https://fruwyrldqkxmnrojtobb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
  );

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
  );
};

export default Login;
