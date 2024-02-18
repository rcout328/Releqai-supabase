import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { useContext, useReducer } from "react";
import DarkContext from "../Context/DarkContext";
import supabase from "./Supabase";
import reducer from "./Reducer";
import useSupabaseAuth from "./useSession";
export default function ContactForm1() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const { session } = useSupabaseAuth();
  const [darks] = useContext(DarkContext);
  function handleInput(e) {
    dispatch({ type: e.target.name, payload: e.target.value });
  }

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
      {session ? (
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
      ) : (
        <h1>no</h1>
      )}
    </>
  );
}
