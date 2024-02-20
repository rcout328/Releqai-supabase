import Navbar from "./Navbar";
import Part1 from "./Part1";
import { useContext, useState } from "react";
import DarkContext from "../Context/DarkContext";
import useSupabaseAuth from "./useSession";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Home = () => {
  const [darks] = useContext(DarkContext);
  const { session } = useSupabaseAuth();
  const [set, setState] = useState(false);
  const [set1, setState1] = useState(false);
  const [set2, setState2] = useState(false);
  function com1() {
    setState("true");
    setState1("false");
    setState2("false");
  }
  function com2() {
    setState("false");
    setState1("true");
    setState2("false");
  }
  function com3() {
    setState("false");
    setState1("false");
    setState2("true");
  }

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darks ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Navbar />

      <div className="container mx-auto px-4">
        {session ? (
          <>
            <div className="mt-10 space-x-5">
              <button
                className={` w-20 h-10 rounded-3xl mb-10 ${
                  darks ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={com1}
              >
                Ai tool
              </button>
              <button
                className={` w-20 h-10 rounded-3xl mb-10 ${
                  darks ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={com2}
              >
                Releq Ai
              </button>
              <button
                className={` w-20 h-10 rounded-3xl mb-10 ${
                  darks ? "bg-black text-white" : "bg-white text-black"
                }`}
                onClick={com3}
              >
                Prompts
              </button>
              {set === "true" ? <Part1 /> : <div></div>}
            </div>
            <div>{set1 === "true" ? <Part2 /> : <div></div>}</div>
            <div>{set2 === "true" ? <Part3 /> : <div></div>}</div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <h1>Login to access the app</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
