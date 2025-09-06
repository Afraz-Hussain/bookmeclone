import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import OfferSection from './OfferSection'
import SliderSection from './SliderSection'
import TrendingDest from './TrendingDest'
import Explore from './Explore'
import FeatureSection from './FeaturedSection'

function Home() {
  return (
   <div>
     <div className='pl-23 pt-10 font-sans max-sm:pl-2 max-sm:pr-2 bg-[#003B95] '>
     <Header/>
     <SearchBar/>
    </div>
    <div className='pl-23 pr-23 pt-10 font-sans max-sm:pl-4'>
      <OfferSection/>
      <Explore/>
      <SliderSection/>
      <FeatureSection/>
      <TrendingDest/>
    </div>
   </div>

  )
}

export default Home
