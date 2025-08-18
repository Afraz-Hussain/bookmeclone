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
    <div className="flex gap-6 items-center bg-[#003B95] pl-20">
      {cate.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center gap-2 cursor-pointer border p-2 rounded-full text-white
            ${activeIndex === index ? "bg-[#c2d0e63d] text-[#003B95]" : "hover:bg-[#c2d0e621]"}`}
        >
          <ion-icon name={item.icon}></ion-icon>
          <span className="font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default NavbarBottom;
