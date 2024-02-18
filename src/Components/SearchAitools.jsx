import { useState, useEffect } from "react";
import supabase from "./Supabase";
import Navbar from "./Navbar";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import useSupabaseAuth from "./useSession";

const SearchAitools = () => {
  const [search, setSearch] = useState("");
  const [darks] = useContext(DarkContext);
  const [searchResults, setSearchResults] = useState([]);
  const { session } = useSupabaseAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("aitool")
          .select("*")
          .ilike("aitoolname", `%${search}%`);

        if (error) {
          throw error;
        }

        setSearchResults(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [search, supabase]);

  return (
    <>
      <Navbar />
      {session ? (
        <div
          className={`flex flex-col items-center  ${
            darks ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for AI tools"
            className={`border p-2 rounded-md mt-8 outline-none focus:border-blue-500 ${
              darks ? "border-gray-300" : "border-gray-700"
            }`}
          />

          {searchResults.length > 0 && (
            <div className="mt-4 space-y-4">
              {searchResults.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-md shadow-md transition duration-300 hover:shadow-lg ${
                    darks
                      ? "bg-white text-black"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <strong className="text-blue-600">{item.aitoolname}:</strong>{" "}
                  {item.description}
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`flex flex-col justify-center items-center pl-5 pt-5 ${
            darks ? "bg-white text-black" : "bg-black text-white"
          } h-screen`}
        >
          <h1>Login to access app</h1>
        </div>
      )}
    </>
  );
};

export default SearchAitools;
