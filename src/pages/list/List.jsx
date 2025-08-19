import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Filters from '../home/Filters'
import Properties from '../home/Properties'
import SearchBar from '../home/SearchBar'

function List() {
  const location = useLocation()
 console.log(location.state)
 const searchData = location.state

  return (
    <div className=' pl-23 pr-23 pt-10 font-sans max-sm:pl-4'>
    <div className='-mt-30'>
    <SearchBar searchData={searchData}/>
    </div>
    <div className='flex justify-between pl-10 pr-120'>
   <div className=' w-80'>
   <Filters/>
   </div>
    <div className=" w-80">
    <Properties/>
    </div>
    </div>
    </div>
   
  )
}

export default List
