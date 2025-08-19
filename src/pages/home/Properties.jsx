import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function Properties() {
    const location=useLocation()
    const [loc, setLoc] = useState('')

    useEffect(() => {
      if (location.state?.dest) {
        setLoc(location.state.dest)
      }
    }, [location.state]) 
  return (
    <div>
      <h1>{loc}</h1>
    </div>
  )
}

export default Properties
