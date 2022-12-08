import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Technology from './Components/Technology'
import Catagory from './Container/Catagory'
import Home from './Container/Home'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cat' element={<Catagory />}/>
      <Route path='/tech' element={<Technology />}>

        
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
