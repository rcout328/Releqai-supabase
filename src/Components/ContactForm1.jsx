import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { useContext, useReducer } from "react";
import DarkContext from "../Context/DarkContext";
import { createClient } from "@supabase/supabase-js";
import reducer from "./Reducer";
export default function ContactForm1() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [darks] = useContext(DarkContext);
  function handleInput(e) {
    dispatch({ type: e.target.name, payload: e.target.value });
  }
  const supabase = createClient(
    "https://fruwyrldqkxmnrojtobb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
  );

  const initialState = {
    name: "",
    email: "",
    phoneno: "",
    message: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
        className={`flex flex-col justify-center items-center h-screen ${
          darks ? "bg-white" : "bg-black"
        }`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md w-full mt-10 h-full"
        >
          <input
            {...register("name")}
            placeholder="Enter your Name"
            value={state.name}
            onChange={handleInput}
            className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <input
            {...register("email")}
            placeholder="Enter your Email"
            value={state.email}
            onChange={handleInput}
            className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <input
            {...register("phoneno")}
            value={state.phoneno}
            onChange={handleInput}
            placeholder="Enter your Phone Number"
            className="mt-4 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <textarea
            {...register("message")}
            value={state.message}
            onChange={handleInput}
            placeholder="Enter your Message"
            className="mt-4 p-2 border border-gray-300 rounded-md w-full resize-none focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="mt-6 bg-blue-700 text-white p-2 rounded-full w-full focus:outline-none hover:bg-blue-600"
            onClick={handleadd}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
