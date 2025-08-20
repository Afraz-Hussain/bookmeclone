import { Check, ChevronRight, ThumbsUp } from "lucide-react";
import React from "react";

const Search_Items = ({ view }) => {
  return (
    <div
      className={`border border-gray-200 rounded-md p-3 ${
        view === "list" 
          ? "flex flex-col sm:flex-row m-1 gap-3 sm:gap-0 sm:justify-between" 
          : "flex flex-col m-0.5"
      }`}
    >
      {/* Image */}
      <div className={view === "list" ? "pic sm:w-48 md:w-56 flex-shrink-0" : ""}>
        <img
          src="pics/roompic.jpg"
          alt="2 Bed Apartment in Islamabad"
          className={`rounded-lg cursor-pointer object-cover ${
            view === "grid" 
              ? "w-full h-32 sm:h-36 mb-2" 
              : "w-full h-32 sm:h-32 md:h-full sm:rounded-lg"
          }`}
        />
      </div>

      {/* Details */}
      <div className={view === "list" ? "desc flex-1 sm:px-4 px-0" : "desc"}>
        <h2 className="cursor-pointer text-blue-600 font-bold text-sm sm:text-base hover:text-black transition-colors">
          2 Bed Apartment in Islamabad
        </h2>

        <div className="flex gap-2 mt-1 items-center">
          <ThumbsUp
            size={16}
            strokeWidth={2}
            absoluteStrokeWidth
            style={{
              backgroundColor: "#FFB700",
              padding: "2px",
              color: "white",
              borderRadius: "2px"
            }}
          />
          <button className="text-xs border border-gray-400 px-1.5 py-0.5 rounded-sm hover:bg-gray-50">
            Featured
          </button>
        </div>

        <div className="tags text-blue-700 underline text-xs font-bold flex flex-wrap gap-1 cursor-pointer mt-1">
          <p className="hover:text-blue-900">F-6 Sector</p>
          <p className="hover:text-blue-900">Islamabad</p>
          <p className="hover:text-blue-900">Show on map</p>
        </div>

        <p className="text-xs text-gray-600 mt-1">2.1 km from downtown</p>
        <p className="font-bold text-sm mt-1">Two-Bedroom Apartment</p>

        {/* Tooltip */}
        <p className="relative group cursor-pointer text-xs text-gray-700 mt-1 leading-relaxed">
          Entire apartment • 2 bedrooms • 1 living room • 2 bathrooms • 1 kitchen • 149 m² • 3 beds
          <span className="absolute left-0 top-full mt-1 hidden group-hover:block w-64 max-w-xs bg-black text-white text-xs rounded-md px-3 py-2 shadow-lg z-20">
            <li className="list-none font-bold mb-1">Bedroom 1: King size</li>
            <li className="list-none font-bold mb-1">Bedroom 2: 1 full bed</li>
            <li className="list-none font-bold">Living room: 1 sofa bed</li>
          </span>
        </p>

        {/* Green check tags */}
        <div className="mt-2 space-y-1">
          <div className="flex gap-1.5 items-center">
            <Check size={14} style={{ color: "#008234" }} />
            <p className="font-bold text-xs text-[#008234]">Free Cancellation</p>
          </div>
          <div className="flex gap-1.5 items-center">
            <Check size={14} style={{ color: "#008234" }} />
            <p className="font-bold text-xs text-[#008234]">No prepayment needed</p>
          </div>
        </div>
      </div>

      {/* Review + Button */}
      <div className={
        view === "grid" 
          ? "flex justify-between items-center mt-2" 
          : "flex flex-col sm:text-right mt-3 sm:mt-0 sm:w-40 sm:flex-shrink-0 sm:ml-4"
      }>
        <div className="flex items-center gap-2 sm:justify-end">
          <h3 className="text-xs sm:text-sm">Review Score</h3>
          <h2 className="bg-blue-900 text-white font-bold rounded-sm px-1.5 py-1 text-xs">
            5.5
          </h2>
        </div>
        <p className="text-gray-500 text-xs mt-0.5">18 Reviews</p>

        <div className={view === "grid" ? "hidden" : "ml-4 mt-20"}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 px-3 py-2 rounded-sm text-xs w-full sm:w-auto transition-colors">
            See availability
            <ChevronRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search_Items;