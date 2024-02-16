import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";

const ReleqAitools = () => {
  const [datas, setData] = useState([]);
  const [darks] = useContext(DarkContext);
  const supabase = createClient(
    "https://fruwyrldqkxmnrojtobb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
  );

  async function getData() {
    try {
      const { data, error } = await supabase.from("releqaitool").select("*");
      if (error) {
        throw error;
      }
      setData(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`${
          darks ? "bg-white text-black" : "bg-black text-black"
        } min-h-screen flex items-center justify-center`}
      >
        <div
          className={`container mx-auto p-8 rounded-lg shadow-lg mt-10 ${
            darks ? "bg-white text-black" : "bg-black  border border-white"
          }`}
        >
          <h1
            className={`text-3xl font-semibold mb-6 ${
              darks ? "text-black" : "text-white"
            }`}
          >
            AI Tools
          </h1>
          <ul
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 `}
          >
            {datas.map((item) => (
              <li
                key={item.id}
                className="bg-gray-200 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {item.aitoolname}
                </h2>
                <div className="flex items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Learn More
                  </a>
                  <span className="ml-2 text-gray-500">{item.catid}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReleqAitools;
