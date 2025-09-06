import React from "react";
import useFetch from "../../hooks/UseFetch.js"
const FeaturedSection = () => {
    const{data,loading,err}=useFetch("http://localhost:3000/backend/hotels/findallhotels?isFeatured=true",{
      // headers: {
      //   Authorization: `Bearer ${token}`
      // },
      withCredentials: true  
    })
  console.log(data)
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <h2 className="text-xl sm:text-2xl font-bold mt-3 mb-2">
        Explore Pakistan
      </h2>
      <p className="text-md text-gray-500 mb-4">
        These popular destinations have a lot to offer
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((itm, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3"
          >
            <img
              src={itm.pic}
              alt={itm.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 font-bold text-lg">{itm.name}</h3>
            <p className="text-gray-500 text-sm">{itm.city}</p>
            <p className="bg-blue-700 text-white rounded-md w-6 p-0.5 text-sm">{itm.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
