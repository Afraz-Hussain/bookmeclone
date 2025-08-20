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
    <div className=' pl-23 pr-23 pt-10 font-sans ' >
    <div className='-mt-30'>
    <SearchBar searchData={searchData}/>
    </div>
    <div className='flex justify-between pl-10 pr-10'>
   <div className=' w-50'>
   <Filters/>
   </div>
    <div className=" w-full max-sm:pl-4  max-md:pr-0 max-md:pr-0'">
    <Properties/>
    </div>
    </div>
    </div>
   
  )
}

export default List
