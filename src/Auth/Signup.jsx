import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { DarkContext } from "../Context/DarkContext";

const Signup = () => {
  const [signupemail, setsignupEmail] = useState("");
  const [signuppassword, setsignupPassword] = useState("");
  const [darks] = useContext(DarkContext);
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

      console.log("Signup successful!");
      // Redirect or handle successful signup
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        darks ? "bg-white " : "bg-black "
      } h-screen`}
    >
      <h1
        className={`font-bold mt-10 text-3xl ${
          darks ? "text-black " : "text-white "
        }`}
      >
        Signup
      </h1>
      <input
        type="text"
        value={signupemail}
        onChange={(e) => setsignupEmail(e.target.value)}
        placeholder="Enter your Email"
        className={`border px-5 py-5 mt-10 ${
          darks ? "border-white" : "border-black"
        }`}
      />
      <input
        type="password"
        value={signuppassword}
        onChange={(e) => setsignupPassword(e.target.value)}
        placeholder="Enter your Password"
        className={`border px-5 py-5 mt-10 ${
          darks ? "border-white" : "border-black"
        }`}
      />
      <Link to="/">
        <button
          className={`mt-10 w-20 h-10 ${
            darks ? "bg-blue-700" : "bg-blue-500"
          } text-white flex justify-center items-center rounded-full`}
          onClick={handlesignup}
        >
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Signup;
