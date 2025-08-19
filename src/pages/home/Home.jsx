import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import OfferSection from './OfferSection'
import SliderSection from './SliderSection'
import TrendingDest from './TrendingDest'

function Home() {
  return (
   <div>
     <div className='pl-23 pt-10 font-sans max-sm:pl-4 bg-[#003B95] -mt-15'>
     <Header/>
     <SearchBar/>
    </div>
    <div className='pl-23 pr-23 pt-10 font-sans max-sm:pl-4'>
      <OfferSection/>
      <SliderSection/>
      <TrendingDest/>
    </div>
   </div>

  )
}

export default Home
