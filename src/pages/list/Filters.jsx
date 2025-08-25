import React from "react";
import { Slider, Checkbox } from "antd";

function Filters() {
  return (
    <div className="w-72 bg-white space-y-4">
      <h2 className="text-lg font-bold">Filter by</h2>

      {/* Previous Filters */}
      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-semibold text-black">Your Previous Filters</h3>
        <p className="text-sm text-gray-500">No filters applied yet</p>
      </div>

      {/* Popular Filters */}
      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-semibold text-black ">Popular Filters</h3>
        <Checkbox.Group className="flex flex-col space-y-2 w-full">
          <Checkbox value="breakfast" className="w-full">
            <div className="flex justify-between w-full">
              <span>Breakfast included</span>
              <span className="text-gray-500">(120)</span>
            </div>
          </Checkbox>
          <Checkbox value="free_cancellation" className="w-full">
            <div className="flex justify-between w-full">
              <span>Free cancellation</span>
              <span className="text-gray-500">(85)</span>
            </div>
          </Checkbox>
          <Checkbox value="wifi" className="w-full">
            <div className="flex justify-between w-full">
              <span>Free WiFi</span>
              <span className="text-gray-500">(140)</span>
            </div>
          </Checkbox>
          <Checkbox value="parking" className="w-full">
            <div className="flex justify-between w-full">
              <span>Parking</span>
              <span className="text-gray-500">(90)</span>
            </div>
          </Checkbox>
        </Checkbox.Group>
      </div>

      {/* Price Range */}
      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-bold text-black mb-2">Your budget (per night)</h3>
        <p className="text-sm text-gray-500">0$ - 200$</p>
        <Slider
          range
          defaultValue={[20, 80]}
          min={0}
          max={200}
          style={{
            "--ant-slider-track-bg": "blue",
            "--ant-slider-handle-color": "blue",
          }}
        />
      </div>

      {/* Facilities */}
      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-semibold text-black mb-2">Facilities</h3>
        <Checkbox.Group className="flex flex-col space-y-2 w-full">
          <Checkbox value="wifi" className="w-full">
            <div className="flex justify-between w-full">
              <span>Free WiFi</span>
              <span className="text-gray-500">(140)</span>
            </div>
          </Checkbox>
          <Checkbox value="parking" className="w-full">
            <div className="flex justify-between w-full">
              <span>Parking</span>
              <span className="text-gray-500">(120)</span>
            </div>
          </Checkbox>
          <Checkbox value="pool" className="w-full">
            <div className="flex justify-between w-full">
              <span>Swimming Pool</span>
              <span className="text-gray-500">(75)</span>
            </div>
          </Checkbox>
          <Checkbox value="spa" className="w-full">
            <div className="flex justify-between w-full">
              <span>Spa</span>
              <span className="text-gray-500">(60)</span>
            </div>
          </Checkbox>
          <Checkbox value="ac" className="w-full">
            <div className="flex justify-between w-full">
              <span>Air Conditioning</span>
              <span className="text-gray-500">(200)</span>
            </div>
          </Checkbox>
        </Checkbox.Group>
      </div>

      {/* Meals */}
      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-semibold text-black mb-2">Meals</h3>
        <Checkbox.Group className="flex flex-col space-y-2 w-full">
          <Checkbox value="breakfast" className="w-full">
            <div className="flex justify-between w-full">
              <span>Breakfast included</span>
              <span className="text-gray-500">(95)</span>
            </div>
          </Checkbox>
          <Checkbox value="halfboard" className="w-full">
            <div className="flex justify-between w-full">
              <span>Half board</span>
              <span className="text-gray-500">(40)</span>
            </div>
          </Checkbox>
          <Checkbox value="fullboard" className="w-full">
            <div className="flex justify-between w-full">
              <span>Full board</span>
              <span className="text-gray-500">(30)</span>
            </div>
          </Checkbox>
          <Checkbox value="allinclusive" className="w-full">
            <div className="flex justify-between w-full">
              <span>All inclusive</span>
              <span className="text-gray-500">(25)</span>
            </div>
          </Checkbox>
        </Checkbox.Group>
      </div>

      {/* Property Type */}
      <div className="border border-gray-200 rounded-md p-3">
        <h3 className="font-semibold text-black mb-2">Property Type</h3>
        <Checkbox.Group className="flex flex-col space-y-2 w-full">
          <Checkbox value="apartment" className="w-full">
            <div className="flex justify-between w-full">
              <span>Apartment</span>
              <span className="text-gray-500">(60)</span>
            </div>
          </Checkbox>
          <Checkbox value="family" className="w-full">
            <div className="flex justify-between w-full">
              <span>Family-Friendly Properties</span>
              <span className="text-gray-500">(120)</span>
            </div>
          </Checkbox>
          <Checkbox value="guesthouse" className="w-full">
            <div className="flex justify-between w-full">
              <span>Guesthouses</span>
              <span className="text-gray-500">(75)</span>
            </div>
          </Checkbox>
          <Checkbox value="vacation" className="w-full">
            <div className="flex justify-between w-full">
              <span>Vacation Homes</span>
              <span className="text-gray-500">(60)</span>
            </div>
          </Checkbox>
          <Checkbox value="bnb" className="w-full">
            <div className="flex justify-between w-full">
              <span>Bed and Breakfasts</span>
              <span className="text-gray-500">(200)</span>
            </div>
          </Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  );
}

export default Filters;
