import React from 'react'

const TrendingDest = () => {
  return (
    <div className="px-6 mt-4 mb-40">
      <div>
        <h2 className="text-2xl font-bold mt-3">Trending destinations</h2>
        <p className="text-gray-600">
          Most popular choices for travelers from Pakistan
        </p>
      </div>

      {/* upper boxes having 2 cities lhr and isl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {/* Lahore box */}
        <div
          className="h-60 rounded-xl bg-cover bg-center flex items-start p-3 
          text-white font-bold text-lg pt-4 cursor-pointer hover:border border-yellow-400"
          style={{ backgroundImage: "url('pics/lahore.jpg')" }}
        >
          <div className="flex items-center">
            Lahore
            <img src="pics/Pk.png" className="w-6 h-4 ml-2 mt-1" alt="PK flag" />
          </div>
        </div>

        {/* Islamabad box */}
        <div
          className="h-60 rounded-xl bg-cover bg-center flex items-start p-3 
          text-white font-bold text-lg pt-4 cursor-pointer hover:border border-yellow-400"
          style={{ backgroundImage: "url('pics/isl.jpg')" }}
        >
          <div className="flex items-center">
            Islamabad
            <img src="pics/Pk.png" className="w-6 h-4 ml-2 mt-1" alt="PK flag" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingDest
