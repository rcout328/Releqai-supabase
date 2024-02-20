import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import useSupabaseAuth from "./useSession";
import supabase from "./Supabase";
import categoriesArray from "./Arrays/Array";

const Aitools = () => {
  const [datas, setData] = useState([]);
  const [darks] = useContext(DarkContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { session } = useSupabaseAuth();

  async function getData() {
    try {
      let query = supabase.from("aitool").select("*");

      if (selectedCategory) {
        query = query.filter("Cat_id", "eq", selectedCategory);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setData(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, [selectedCategory]); // Fetch data whenever the selected category changes

  return (
    <>
      <Navbar />
      {session ? (
        <div
          className={`${
            darks ? "bg-white text-black" : "bg-black"
          } min-h-screen flex items-center justify-center`}
        >
          <div
            className={`container mx-auto p-8 mt-10  ${
              darks ? "bg-white " : "bg-black border border-white border-x-2"
            }rounded-lg shadow-lg`}
          >
            <h1
              className={`text-3xl font-semibold mb-6 ${
                darks ? "text-black" : "text-white"
              }`}
            >
              AI Tools
            </h1>
            <div className="mb-4">
              <label className="text-sm font-semibold">Select Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-black border border-black"
              >
                <option value="">All Categories</option>
                {categoriesArray.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {datas.map((item) => (
                <li key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2">
                    {item.aitoolname}
                  </h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Learn More
                    </a>
                    <span className="ml-2 text-gray-500">{item.Cat_id}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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

export default Aitools;
