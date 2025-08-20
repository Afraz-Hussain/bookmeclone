import React, { useState } from 'react'
import { sliderdata } from '../../data.js'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsToShow = 4
  const totalItems = sliderdata.length

  const nextSlide = () => {
    if (currentIndex < totalItems - itemsToShow) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="px-4 md:px-8">
      <h2 className="text-2xl font-bold mt-3">Browse by property type</h2>

      <div className="relative flex items-center mt-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute -left-4 z-10 p-2 rounded-full shadow bg-white 
            ${currentIndex === 0 ? 'opacity-0' : 'hover:bg-gray-100'}`}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slider container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {sliderdata.map((itm, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 p-2">
                <img
                  src={itm.pic}
                  alt={itm.name}
                  className="w-full h-44 object-cover rounded-lg shadow"
                />
                <span className="block text-center mt-2 font-bold">{itm.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= totalItems - itemsToShow}
          className={`absolute -right-4 z-10 p-2 rounded-full shadow bg-white 
            ${currentIndex >= totalItems - itemsToShow ? 'opacity-0 ' : 'hover:bg-gray-100'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default SliderSection
