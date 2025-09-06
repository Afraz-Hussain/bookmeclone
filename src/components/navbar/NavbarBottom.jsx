import React, { useState } from 'react';

const NavbarBottom = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const cate = [
    { name: "Stays", icon: "bed-outline" },
    { name: "Flights", icon: "airplane-outline" },
    { name: "Car Rental", icon: "car-outline" },
    { name: "Attractions", icon: "medical-outline" },
    { name: "Airport Taxis", icon: "car-outline" }
  ];

  return (
    <div className="flex gap-2 lg:gap-6 items-center bg-[#003B95] px-4 lg:pl-20 pb-10 overflow-x-auto">
      {cate.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center gap-1 lg:gap-2 cursor-pointer border p-1 lg:p-2 rounded-full text-white whitespace-nowrap flex-shrink-0
            ${activeIndex === index ? "bg-[#c2d0e63d] text-[#003B95]" : "hover:bg-[#c2d0e621]"}`}
        >
          <ion-icon name={item.icon} className="text-sm lg:text-base"></ion-icon>
          <span className="font-medium text-xs lg:text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default NavbarBottom;
