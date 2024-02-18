import { useState, useEffect } from "react";
import supabase from "./Supabase";
import useSupabaseAuth from "./useSession";
import { LoginContext } from "../Context/Logincon";
import { useContext } from "react";
import Navbar from "./Navbar";

const ContactForm1 = () => {
  const initialState = {
    name: "",
    email: "",
    phoneno: "",
    message: "",
  };

  const [darks] = useContext(LoginContext);
  const { session } = useSupabaseAuth();

  const getStorageValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  };

  const [state, setState] = useState(() =>
    getStorageValue("formState", initialState)
  );

  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(state));
  }, [state]);

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      const { error } = await supabase.from("contact").insert([state]);
      if (error) throw error;
      console.log("Data added successfully");
      setState(initialState);
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      {session ? (
        <div
          className={`flex flex-col items-center ${
            darks ? "bg-white" : "bg-black"
          }`}
        >
          <form className="max-w-md w-full mt-10 h-full">
            <input
              placeholder="Enter your Name"
              name="name"
              value={state.name}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            <input
              placeholder="Enter your Email"
              name="email"
              value={state.email}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            <input
              placeholder="Enter your Phone Number"
              name="phoneno"
              value={state.phoneno}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Enter your Message"
              name="message"
              value={state.message}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-300 rounded-md w-full resize-none focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              className="mt-6 bg-blue-700 text-white p-2 rounded-full w-full focus:outline-none hover:bg-blue-600"
              onClick={handleAdd}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h1>no</h1>
      )}
    </>
  );
};

export default ContactForm1;
