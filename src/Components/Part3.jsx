import  { useState } from "react";
import promptsArray from "./Arrays/Prompts";

const Part3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const uniqueCategories = Array.from(
    new Set(promptsArray.map((item) => item.category))
  );
  const filteredPrompts = selectedCategory
    ? promptsArray.filter((item) => item.category === selectedCategory)
    : promptsArray;

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="mr-2">
          Select Category:
        </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredPrompts.map((categoryObject, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {categoryObject.category}
            </h2>
            <ul>
              {categoryObject.prompts.map((prompt, promptIndex) => (
                <li key={promptIndex} className="mb-2">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part3;
