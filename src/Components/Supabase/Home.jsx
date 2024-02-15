import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Add from "../Add";

const supabase = createClient(
  "https://cjjmuomnpvxquzrjbjik.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqam11b21ucHZ4cXV6cmpiamlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMDYxOTgsImV4cCI6MjAyMzU4MjE5OH0.cTCh0a69IL3t_Cq-vLfcoDuCfspg9mZdCfGuQ8MK8z4"
);

const Home = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    name: "",
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  async function getCountries() {
    try {
      const { data, error } = await supabase.from("countries").select("*");
      if (error) throw error;
      setData(data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteCountry(id) {
    try {
      const { error } = await supabase.from("countries").delete().eq("id", id);
      if (error) throw error;
      getCountries();
    } catch (error) {
      alert(error.message);
    }
  }

  async function updateCountry() {
    try {
      const { error } = await supabase
        .from("countries")
        .update({
          name: updateData.name,
        })
        .eq("id", updateData.id);

      if (error) throw error;
      setShowUpdateForm(false);
      getCountries();
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  const handleUpdateClick = (country) => {
    setUpdateData({
      id: country.id,
      name: country.name,
      description: country.description,
    });
    setShowUpdateForm(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <ul>
        {data.map((country) => (
          <li key={country.id}>
            {country.name}{" "}
            <button
              onClick={() => handleUpdateClick(country)}
              className="w-20 h-10 bg-blue-700 text-white rounded-full flex justify-center items-center"
            >
              Update
            </button>
            <button
              onClick={() => deleteCountry(country.id)}
              className="w-20 h-10 bg-red-600 text-white rounded-full flex justify-center items-center mt-5"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showUpdateForm && (
        <div>
          <input
            type="text"
            value={updateData.name}
            onChange={(e) =>
              setUpdateData({ ...updateData, name: e.target.value })
            }
            placeholder="Enter updated name"
          />
          <button onClick={updateCountry}>Update</button>
        </div>
      )}
      <Add />
    </div>
  );
};

export default Home;
