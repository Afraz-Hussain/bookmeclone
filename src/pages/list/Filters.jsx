import React, { useState } from "react";
import { Slider, Checkbox, Button } from "antd";

function Filters({ onApply }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [price, setPrice] = useState([0, 500]);

  const handleApplyFilters = () => {
    onApply({
      filters: selectedFilters,
      priceRange: price,
    });
  };

  return (
    <div className="w-72 bg-white space-y-4 p-3 border rounded-md shadow-sm">
      <h2 className="text-lg font-bold">Filter by</h2>

      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-semibold text-black">Popular Filters</h3>
        <Checkbox.Group
          className="flex flex-col space-y-2 w-full"
          onChange={(value) => setSelectedFilters(value)}
        >
          <Checkbox value="breakfast" className="w-full">Breakfast included</Checkbox>
          <Checkbox value="free_cancellation" className="w-full">Free cancellation</Checkbox>
          <Checkbox value="wifi" className="w-full">Free WiFi</Checkbox>
          <Checkbox value="parking" className="w-full">Parking</Checkbox>
        </Checkbox.Group>
      </div>

      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-bold text-black mb-2">Your budget (per night)</h3>
        <p className="text-sm text-gray-500">${price[0]} - ${price[1]}</p>
        <Slider
          range
          value={price}
          min={0}
          max={500}
          onChange={(val) => setPrice(val)}
        />
      </div>

      <Button type="primary" block className="mt-4" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </div>
  );
}

export default Filters;