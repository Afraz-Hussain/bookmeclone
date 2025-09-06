import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './hotel/Hotel';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
const App = () => {
  return (
    
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/list"  element={<List/>}/>
        <Route path="/hotels/:id"  element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App