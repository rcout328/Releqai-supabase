import { useEffect, useState } from "react";
import { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import useSupabaseAuth from "./useSession";
import supabase from "./Supabase";
import Releqaicat1 from "./Arrays/Releqcat";

// Part2 Component
const Part2 = () => {
  const [datas, setData] = useState([]);
  const [darks] = useContext(DarkContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const { session } = useSupabaseAuth();

  async function getData() {
    try {
      let query = supabase.from("releqaitool").select("*");

      if (selectedCategory) {
        query = query.filter("catid", "eq", selectedCategory); // Update to 'catid'
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]); // Fetch data whenever the selected category changes

  useEffect(() => {
    console.log("Filtered Data:");
    datas.forEach((item) => console.log(item));
  }, [datas]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4">
        <div>
          <h1 className="text-xl font-bold">Releqai Categories</h1>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            placeholder="All Categories"
            className="text-black border border-black"
          >
            <option value="">All Categories</option>
            {Releqaicat1.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
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
              <h1 className={`text-3xl font-semibold m`}>AI Tools</h1>
              <ul
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  darks ? "bg-white" : "bg-black"
                }`}
              >
                {datas.map((item) => (
                  <li
                    key={item.id}
                    className={` p-4 rounded-lg shadow-md ${
                      darks
                        ? "text-black "
                        : "text-white bg-black border border-white "
                    }`}
                  >
                    <h2 className={`text-xl font-semibold mb-2`}>
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
                      <span className="ml-2 text-gray-500">
                        Category: {item.catid} {/* Update to 'catid' */}
                      </span>
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
      </div>
    </div>
  );
};

export default Part2;
