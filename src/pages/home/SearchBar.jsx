import React, { useState, useEffect } from "react";
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

  // Load data from List page
  useEffect(() => {
    if (searchData) {
      setDest(searchData.dest || "");
      setDateRange([searchData.startDate, searchData.endDate]);
      setGuests(searchData.guests || { adults: 1, children: 0, rooms: 1, pets: false });
    }
  }, [searchData]);

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
        sm:flex-nowrap sm:gap-1 w-250
        max-sm:flex-col max-sm:w-100
      "
    >
      {/* Location */}
      <div className="flex items-center gap-2 p-3 bg-white rounded-sm flex-1 min-w-[150px]">
        <BedDouble size={20} color="darkgray" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="outline-none placeholder:text-gray-800 w-full"
          value={dest}
          onChange={(e) => setDest(e.target.value)}
        />
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 p-3 bg-white rounded-sm flex-1 min-w-[150px] relative">
        <CalendarDays size={20} color="darkgray" />
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
          isClearable={true}
          placeholderText="Check-in — Check-out"
          className="outline-none w-full pr-10"
        />
      </div>

      {/* Guests */}
      <div className="relative flex items-center gap-2 p-3 bg-white rounded-sm flex-1 min-w-[150px]">
        <UserRound size={20} color="darkgray" />
        <div
          className="w-full cursor-pointer text-gray-700"
          onClick={() => setOpenGuestsBox(!openGuestsBox)}
        >
          {guests.adults} Adults · {guests.children} Children · {guests.rooms} Rooms 
          {guests.pets ? " · Pets" : ""}
        </div>

        {/* Dropdown */}
        {openGuestsBox && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-10">
            {/* Adults */}
            <div className="flex justify-between items-center mb-2">
              <span>Adults</span>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button
                  onClick={() => handleChange("adults", "dec")}
                  className="px-2 py-1 rounded disabled:opacity-50 hover:bg-[#F0F6FD]"
                  disabled={guests.adults <= 1}
                >
                  <Minus size={16} />
                </button>
                <span>{guests.adults}</span>
                <button
                  onClick={() => handleChange("adults", "inc")}
                  className="px-2 py-1 rounded hover:bg-[#F0F6FD]"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center mb-2">
              <span>Children</span>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button
                  onClick={() => handleChange("children", "dec")}
                  className="px-2 py-1 rounded disabled:opacity-50 hover:bg-[#F0F6FD]"
                  disabled={guests.children <= 0}
                >
                  <Minus size={14} />
                </button>
                <span>{guests.children}</span>
                <button
                  onClick={() => handleChange("children", "inc")}
                  className="px-2 py-1 rounded hover:bg-[#F0F6FD]"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex justify-between items-center mb-2">
              <span>Rooms</span>
              <div className="flex items-center gap-2 border rounded-md p-2">
                <button
                  onClick={() => handleChange("rooms", "dec")}
                  className="px-2 py-1 rounded disabled:opacity-50 hover:bg-[#F0F6FD]"
                  disabled={guests.rooms <= 1}
                >
                  <Minus size={14} />
                </button>
                <span>{guests.rooms}</span>
                <button
                  onClick={() => handleChange("rooms", "inc")}
                  className="px-2 py-1 rounded hover:bg-[#F0F6FD]"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* ✅ Pets Toggle */}
            <div className="flex justify-between items-center mb-4">
              <span>Traveling with pets?</span>
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
                className="bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() => setOpenGuestsBox(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search button */}
      <button
        className="
          bg-[#006CE4] hover:bg-[#003B95] hover:cursor-pointer 
          text-white rounded-md px-6 py-3 font-medium 
          flex-shrink-0 w-full sm:w-auto
        "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
