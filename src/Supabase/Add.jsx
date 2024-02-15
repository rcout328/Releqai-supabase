import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const Add = () => {
  const [input, setInput] = useState("");

  const supabase = createClient(
    "https://cjjmuomnpvxquzrjbjik.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqam11b21ucHZ4cXV6cmpiamlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMDYxOTgsImV4cCI6MjAyMzU4MjE5OH0.cTCh0a69IL3t_Cq-vLfcoDuCfspg9mZdCfGuQ8MK8z4"
  );

  const handleAdd = async () => {
    try {
      const { error } = await supabase
        .from("countries")
        .insert({
          name: input,
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter your Data"
      />
      <button
        className="w-20 h-10 bg-blue-700 text-white flex justify-center items-center rounded-full mt-10"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
