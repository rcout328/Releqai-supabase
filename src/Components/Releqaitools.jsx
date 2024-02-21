import { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import DarkContext from "../Context/DarkContext";
import { LoginContext } from "../Context/Logincon";
import supabase from "./Supabase";
import Releqaicat1 from "./Arrays/Releqcat";

const ReleqAitools = () => {
  const [datas, setData] = useState([]);
  const [darks] = useContext(DarkContext);
  const [session, setSession] = useContext(LoginContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  async function getData() {
    try {
      let query = supabase.from("releqaitool").select("*");

      if (selectedCategory) {
        query = query.filter("catid", "eq", selectedCategory);
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
  }, [setSession]);

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <>
      <Navbar />
      {session ? (
        <div
          className={`${
            darks ? "bg-white text-black" : "bg-black text-white"
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
            <div className="mb-4">
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
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {datas.map((item) => (
                <li
                  key={item.id}
                  className={`bg-whites p-4 rounded-lg shadow-md ${
                    darks
                      ? ""
                      : "border border-white hover:bg-white hover:text-blue-700"
                  }`}
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

export default ReleqAitools;
