import { useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
const Signup = () => {
  const [signupemail, setsignupEmail] = useState("");
  const [signuppassword, setsignupPassword] = useState("");

  const supabase = createClient(
    "https://fruwyrldqkxmnrojtobb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
  );

  const handlesignup = async () => {
    try {
      const { error } = await supabase.auth.signUp({
        email: signupemail,
        password: signuppassword,
        options: {
          emailRedirectTo: <Link to={"/"} />,
        },
      });

      setsignupEmail("");
      setsignupPassword("");

      if (error) {
        throw error;
      }

      console.log("Logged in successfully:");
      // Redirect or handle successful login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold mt-10 text-3xl">Signup</h1>
      <input
        type="text"
        value={signupemail}
        onChange={(e) => setsignupEmail(e.target.value)}
        placeholder="Enter your Email"
        className="border border-black px-5 py-5 mt-10 "
      />
      <input
        type="password"
        value={signuppassword}
        onChange={(e) => setsignupPassword(e.target.value)}
        placeholder="Enter your Password"
        className="border border-black px-5 py-5 mt-10"
      />
      <Link to="/">
        <button
          className="mt-10 w-20 h-10 bg-blue-700 text-white flex justify-center items-center rounded-full"
          onClick={handlesignup}
        >
          signup
        </button>
      </Link>
    </div>
  );
};

export default Signup;
