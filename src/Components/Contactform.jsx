import { useReducer } from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import { createClient } from "@supabase/supabase-js";
import reducer from "./Reducer";
const initialState = {
  name: "",
  email: "",
  phoneno: "",
  message: "",
};

const supabase = createClient(
  "https://fruwyrldqkxmnrojtobb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
);

const Contactform = () => {
  const [darks] = useContext(DarkContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInput(e) {
    dispatch({ type: e.target.name, payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add your form submission logic here, using the `state` object
    console.log("Form submitted:", state);
  }

  async function handleadd() {
    try {
      const { error } = await supabase.from("contact").insert([state]);
      if (error) throw error;
      console.log("Data added successfully");
      dispatch({ type: "name", payload: "" });
      dispatch({ type: "email", payload: "" });
      dispatch({ type: "phoneno", payload: "" });
      dispatch({ type: "message", payload: "" });
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  }
  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center  ${
          darks ? "bg-white " : "bg-black "
        }`}
      >
        <div className="mt-10 p-6 bg-gray-200 rounded-lg">
          <form onSubmit={handleSubmit} className="max-w-md w-full">
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
              className="mt-2 p-2 border border-gray-400 rounded-md w-full"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-400 rounded-md w-full"
              placeholder="Enter your email"
            />
            <input
              type="text"
              name="phoneno"
              value={state.phoneno}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-400 rounded-md w-full"
              placeholder="Enter your phone"
            />
            <textarea
              name="message"
              value={state.message}
              onChange={handleInput}
              className="mt-4 p-2 border border-gray-400 rounded-md w-full resize-none"
              placeholder="Enter your message"
            />
            <button
              type="submit"
              className="mt-6 bg-blue-700 text-white p-2 rounded-full w-full"
              onClick={handleadd}
            >
              Submit
            </button>
          </form>

          <div className="mt-8">
            <p className="text-xl font-semibold">Form Preview:</p>
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <p>Phone: {state.phoneno}</p>
            <p>Message: {state.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
