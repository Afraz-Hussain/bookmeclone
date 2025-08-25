import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search_Items from "./Search_Items";
import { FetchHotels } from "./FetchHotels";

function Properties() {
  const location = useLocation();
  const [loc, setLoc] = useState("");
  const [view, setView] = useState("list");
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      const data = await FetchHotels({
        city: location.state?.dest,  
        guests: location.state?.guests,
        startDate: location.state?.startDate,
        endDate: location.state?.endDate,
      }); 
      setHotels(data);
      console.log("Hotels fetched:", data);
    };
    getHotels();
  }, [location.state]); 

  useEffect(() => {
    if (location.state?.dest) {
      setLoc(location.state.dest);
    }
  }, [location.state]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:px-0 md:py-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="font-bold text-xl sm:text-2xl lg:text-2xl text-gray-900 leading-tight">
          <span className="block sm:inline">{loc || "Search Results"}:</span>{" "}
          <span className="text-gray-900 text-xl sm:text-medium lg:text-2xl leading-tight">
            {hotels.length} properties
          </span>
        </h1>

        {/* toggle button for list and grid */}
        <div className="flex gap-1 bg-gray-100 rounded-full p-1 self-start sm:self-auto shadow-sm">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              view === "list"
                ? "bg-white text-gray-700 shadow-sm font-semibold border"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
            onClick={() => setView("list")}
          >
            List
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              view === "grid"
                ? "bg-white text-gray-700 shadow-sm font-semibold border"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
            onClick={() => setView("grid")}
          >
            Grid
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
        {hotels && hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Search_Items key={hotel.hotel_id} view={view} hotel={hotel} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Properties;