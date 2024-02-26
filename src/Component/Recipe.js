import React, { useState } from "react";
import "../pop.css"; // Import the CSS file

const Recipe = ({ recipe }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="p-4 md:w-1/3">
      <div className="bg-sky-50 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={recipe.image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {recipe.dishType[0]}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {recipe.label}
          </h1>
        
          <div className="flex items-center flex-wrap ">
            <button
              onClick={togglePopup}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
            >
              View Ingredients
            </button>
            <a
              href={recipe.url}
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              View Recipe
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
          {showPopup && (
            <div className="popup active">
              <div className="popup-inner">
                <h2>Ingredients:</h2>
                <ul>
                  {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <button onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
