import React, { useState, useEffect, useRef } from "react";
import { BedDouble, CalendarDays, UserRound, Plus, Minus } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchData }) => {
  const navigate = useNavigate();

  const [dateRange, setDateRange] = useState([null, null]);
  const [openGuestsBox, setOpenGuestsBox] = useState(false);
  const [startDate, endDate] = dateRange;
  const [dest, setDest] = useState("");
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
    pets: false, 
  });
  const guestDropdownRef = useRef(null);

  // Load data from List page
  useEffect(() => {
    if (searchData) {
      setDest(searchData.dest || "");
      setDateRange([searchData.startDate, searchData.endDate]);
      setGuests(searchData.guests || { adults: 1, children: 0, rooms: 1, pets: false });
    }
  }, [searchData]);

  // Close guest dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target)) {
        setOpenGuestsBox(false);
      }
    };

    if (openGuestsBox) {
      document.addEventListener('mousedown', handleClickOutside);
    }







    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openGuestsBox]);

  // Guest handlers
  const handleChange = (NUMBER, operation) => {
    setGuests((prev) => ({
      ...prev,
      [NUMBER]:
        operation === "inc" ? prev[NUMBER] + 1 : Math.max(0, prev[NUMBER] - 1),
    }));
  };

  const togglePets = () => {
    setGuests((prev) => ({ ...prev, pets: !prev.pets }));
  };

  // Search
  const handleSearch = () => {
    navigate("/list", { state: { startDate, endDate, dest, guests } });
  };

  return (
    <div
      className="
        mt-15 searchbar_fields relative flex gap-2
        bg-yellow-500 rounded-md p-1 flex-wrap
        sm:flex-nowrap sm: w-full max-w-5xl
        max-sm:flex-col max-sm:gap-3 
      "
    >
      {/* Location */}
      <div className="flex items-center gap-2 p-3 bg-white rounded-sm flex-1 min-w-[150px] max-sm:min-w-full">
        <BedDouble size={20} color="darkgray" className="flex-shrink-0" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="outline-none placeholder:text-gray-800 w-full text-sm sm:text-base"
          value={dest}
          onChange={(e) => setDest(e.target.value)}
        />
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 p-3 bg-white rounded-sm flex-1
       min-w-[150px] max-sm:min-w-full relative">
        <CalendarDays size={20} color="darkgray" className="flex-shrink-0" />
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
          isClearable={true}
          placeholderText="Check-in — Check-out"
          className="outline-none w-full pr-10 text-sm sm:text-base"
          dateFormat="MMM dd"
        />
      </div>

      {/* Guests */}
      <div className="relative flex items-center gap-2 p-3 bg-white rounded-sm flex-1 min-w-[150px] max-sm:min-w-full">
        <UserRound size={20} color="darkgray" className="flex-shrink-0" />
        <div
          className="w-full cursor-pointer text-gray-700 text-sm sm:text-base"
          onClick={() => setOpenGuestsBox(!openGuestsBox)}
        >
          <span className="max-sm:hidden">
            {guests.adults} Adults · {guests.children} Children · {guests.rooms} Rooms 
            {guests.pets ? " · Pets" : ""}
          </span>
          <span className="sm:hidden">
            {guests.adults + guests.children} Guests · {guests.rooms} Room{guests.rooms > 1 ? 's' : ''}
            {guests.pets ? " · Pets" : ""}
          </span>
        </div>

        {/* Dropdown */}
        {openGuestsBox && (
          <>
            {/* Mobile overlay */}
            <div className="max-sm:fixed max-sm:inset-0 max-sm:bg-black max-sm:bg-opacity-50 max-sm:z-40"></div>
            <div ref={guestDropdownRef} className="absolute top-full mt-2 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50 max-sm:fixed max-sm:top-1/2 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:w-11/12 max-sm:max-w-md">
            {/* Adults */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm sm:text-base">Adults</span>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button
                  onClick={() => handleChange("adults", "dec")}
                  className="px-3 py-2 rounded disabled:opacity-50 hover:bg-[#F0F6FD] touch-manipulation"
                  disabled={guests.adults <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-[2rem] text-center">{guests.adults}</span>
                <button
                  onClick={() => handleChange("adults", "inc")}
                  className="px-3 py-2 rounded hover:bg-[#F0F6FD] touch-manipulation"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm sm:text-base">Children</span>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button
                  onClick={() => handleChange("children", "dec")}
                  className="px-3 py-2 rounded disabled:opacity-50 hover:bg-[#F0F6FD] touch-manipulation"
                  disabled={guests.children <= 0}
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-[2rem] text-center">{guests.children}</span>
                <button
                  onClick={() => handleChange("children", "inc")}
                  className="px-3 py-2 rounded hover:bg-[#F0F6FD] touch-manipulation"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm sm:text-base">Rooms</span>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button
                  onClick={() => handleChange("rooms", "dec")}
                  className="px-3 py-2 rounded disabled:opacity-50 hover:bg-[#F0F6FD] touch-manipulation"
                  disabled={guests.rooms <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="min-w-[2rem] text-center">{guests.rooms}</span>
                <button
                  onClick={() => handleChange("rooms", "inc")}
                  className="px-3 py-2 rounded hover:bg-[#F0F6FD] touch-manipulation"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* ✅ Pets Toggle */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm sm:text-base">Traveling with pets?</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={guests.pets}
                  onChange={togglePets}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:bg-blue-600"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
              </label>
            </div>

            {/* Done button */}
            <div className="text-right">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded text-sm sm:text-base touch-manipulation"
                onClick={() => setOpenGuestsBox(false)}
              >
                Done
              </button>
            </div>
          </div>
          </>
        )}
      </div>

      {/* Search button */}
      <button
        className="
          bg-[#006CE4] hover:bg-[#003B95] hover:cursor-pointer 
          text-white rounded-md px-6 py-3 font-medium 
          flex-shrink-0 w-full sm:w-auto
          text-sm sm:text-base touch-manipulation
          transition-colors duration-200
        "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
