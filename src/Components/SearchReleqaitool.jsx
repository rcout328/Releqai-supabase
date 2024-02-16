import { useState, useEffect, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "./Navbar";
import DarkContext from "../Context/DarkContext";

const SearchReleqaitools = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [darks] = useContext(DarkContext);
  const supabase = createClient(
    "https://fruwyrldqkxmnrojtobb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("releqaitool")
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
      <div
        className={`flex flex-col items-center ${
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
                {item.catid}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchReleqaitools;
