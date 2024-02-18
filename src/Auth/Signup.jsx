import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { DarkContext } from "../Context/DarkContext";
import useSupabaseAuth from "../Components/useSession";
import Navbar from "../Components/Navbar";
import supabase from "../Components/Supabase";
const Signup = () => {
  const [signupemail, setsignupEmail] = useState("");
  const [signuppassword, setsignupPassword] = useState("");
  const [darks] = useContext(DarkContext);

  const { session } = useSupabaseAuth();

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
      )}
    </>
  );
};

export default Signup;
