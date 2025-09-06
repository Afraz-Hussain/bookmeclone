import React, { useState, useEffect, useRef } from 'react'
import { sliderdata } from '../../data.js'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useFetch from '../../hooks/UseFetch.js'

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const sliderRef = useRef(null)
  const totalItems = sliderdata.length

  const{data,loading,err}=useFetch("http://localhost:3000/backend/hotels/filterbycities?city=islamabad,Lahore,Karachi")
console.log(data)
  // Responsive items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth
      if (width < 640) {
        setItemsToShow(1) // Mobile: 1 item
      } else if (width < 768) {
        setItemsToShow(2) // Small tablet: 2 items
      } else if (width < 1024) {
        setItemsToShow(3) // Tablet: 3 items
      } else {
        setItemsToShow(4) // Desktop: 4 items
      }
    }

    updateItemsToShow()
    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [])

  // Reset current index when itemsToShow changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [itemsToShow])

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

  // Touch/swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <h2 className="text-xl sm:text-2xl font-bold mt-3 mb-2">Explore Pakistan</h2>
      <p className="text-md  text-gray-500 ">These popular destinations have a lot to offer</p>

      <div className="relative flex items-center mt-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute -left-4 z-10 p-2 rounded-full shadow bg-white 
            ${currentIndex === 0 ? 'opacity-0' : 'hover:bg-gray-100'} transition-opacity duration-200`}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slider container */}
        <div 
          ref={sliderRef}
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
  className="flex transition-transform duration-500 ease-in-out gap-x-3"
  style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
>
  {sliderdata.map((itm, index) => (
    <div 
      key={index} 
      className={`flex-shrink-0 ${
        itemsToShow === 1 ? 'w-full' :
        itemsToShow === 2 ? 'w-1/2' :
        itemsToShow === 3 ? 'w-1/3' : 'w-1/5'
      }`}
    >
      <img
        src={itm.pic}
        alt={itm.name}
        className="w-full h-24 object-cover rounded-lg shadow"
      />
      <span className="block font-bold">{itm.name}</span>
      <span className="block text-gray-500 text-md">{data[1]}</span>
    </div>
  ))}
</div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= totalItems - itemsToShow}
          className={`absolute -right-4 z-10 p-2 rounded-full shadow bg-white 
            ${currentIndex >= totalItems - itemsToShow ? 'opacity-0' : 'hover:bg-gray-100'} transition-opacity duration-200`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default Explore