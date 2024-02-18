import { useEffect, useContext, useReducer } from "react";
import Navbar from "./Navbar";
import DarkContext from "../Context/DarkContext";
import supabase from "./Supabase";
import { LoginContext } from "../Context/Logincon";
import reducer from "./Reducer";

const initialState = {
  name: "",
  email: "",
  phoneno: "",
  message: "",
};

const useSupabaseAuth = () => {
  const [session, setSession] = useContext(LoginContext);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data) {
          setSession(data.session);
        }
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };

    const handleAuthStateChange = (_event, newSession) => {
      setSession(newSession);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { session };
};

const Contactform = () => {
  const [darks] = useContext(DarkContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { session } = useSupabaseAuth();

  function handleInput(e) {
    dispatch({ type: e.target.name, payload: e.target.value });
  }

  async function handleAdd() {
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
          className={`flex flex-col items-center ${
            darks ? "bg-white " : "bg-black "
          }`}
        >
          <div className="mt-10 p-6 bg-gray-200 rounded-lg">
            <form onSubmit={handleAdd} className="max-w-md w-full">
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
      ) : (
        <h1>No</h1>
      )}
    </>
  );
};

export default Contactform;
