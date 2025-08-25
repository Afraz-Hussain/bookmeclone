import { Check, ChevronRight, ThumbsUp } from "lucide-react";
import React from "react";

const Search_Items = ({ view, hotel }) => {
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
          src={hotel.max_photo_url} // use API image, fallback to your local one
          alt={hotel.hotel_name}
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
          {hotel.hotel_name}
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
          <p className="hover:text-blue-900">{hotel.address}</p>
          <p className="hover:text-blue-900">{hotel.city}</p>
          <p className="hover:text-blue-900">Show on map</p>
        </div>

        <p className="text-xs text-gray-600 mt-1">
          {hotel.distance_to_cc ? `${hotel.distance_to_cc} km from center` : ""}
        </p>

        <p className="font-bold text-sm mt-1">{hotel.unit_configuration_label}</p>

        {/* Green check tags */}
        <div className="mt-2 space-y-1">
          {hotel.is_free_cancellable && (
            <div className="flex gap-1.5 items-center">
              <Check size={14} style={{ color: "#008234" }} />
              <p className="font-bold text-xs text-[#008234]">Free Cancellation</p>
            </div>
          )}
          {!hotel.is_prepaid && (
            <div className="flex gap-1.5 items-center">
              <Check size={14} style={{ color: "#008234" }} />
              <p className="font-bold text-xs text-[#008234]">No prepayment needed</p>
            </div>
          )}
        </div>
      </div>

      {/* Review + Button */}
      <div
        className={
          view === "grid" 
            ? "flex justify-between items-center mt-2" 
            : "flex flex-col sm:text-right mt-3 sm:mt-0 sm:w-40 sm:flex-shrink-0 sm:ml-4"
        }
      >
        <div className="flex items-center gap-2 sm:justify-end">
          <h3 className="text-xs sm:text-sm">Review Score</h3>
          <h2 className="bg-blue-900 text-white font-bold rounded-sm px-1.5 py-1 text-xs">
            {hotel.review_score || "N/A"}
          </h2>
        </div>
        <p className="text-gray-500 text-xs mt-0.5">
          {hotel.review_nr ? `${hotel.review_nr} Reviews` : "No reviews"}
        </p>

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
