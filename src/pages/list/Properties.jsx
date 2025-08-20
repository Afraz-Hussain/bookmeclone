import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search_Items from "./Search_Items";

function Properties() {
  const location = useLocation();
  const [loc, setLoc] = useState("");
  const [view, setView] = useState("list");

  useEffect(() => {
    if (location.state?.dest) {
      setLoc(location.state.dest);
    }
  }, [location.state]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:px-0 md:py-0">
      
      {/* Header with title and view toggle */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight">
          <span className="block sm:inline">{loc || "Search Results"}:</span>{" "}
          <span className="text-gray-700 text-xl sm:text-medium lg:text-3xl leading-tight">10,91 properties</span>
        </h1>

        {/* View Toggle Buttons */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 self-start sm:self-auto shadow-sm">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              view === "list" 
                ? "bg-white text-blue-600 shadow-sm font-semibold" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
            onClick={() => setView("list")}
          >
            List View
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              view === "grid" 
                ? "bg-white text-blue-600 shadow-sm font-semibold" 
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
            onClick={() => setView("grid")}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Items Container */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4"
            : "flex flex-col gap-3"
        }
      >
        {Array.from({ length: 8 }, (_, index) => (
          <Search_Items key={index} view={view} />
        ))}
      </div>

      
      
    </div>
  );
}

export default Properties;