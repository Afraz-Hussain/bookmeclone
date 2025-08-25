import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Filters from './Filters'
import Properties from './Properties'
import SearchBar from '../home/SearchBar'

function List() {
  const location = useLocation()
 console.log(location.state)
 const searchData = location.state

  return (
    <div className=' pl-23 pr-15 pt-10 font-sans mt-2' >
    <div className='-mt-30'>
    <SearchBar searchData={searchData}/>
    </div>
    <div className='flex justify-between '>
   <div className=' w-60 mt-5'>
   <Filters/>
   </div>
    <div className="mt-4 w-full max-sm:pl-4  ml-8 max-md:pr-0">
    <Properties/>
    </div>
    </div>
    </div>
   
  )
}

export default List
