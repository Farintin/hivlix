import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './layout/Header/'
import Footer from './layout/Footer/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import Emergency from './pages/Emergency'
import Contact from './pages/Contact'

function App() {
  return <>
    <Header />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='emergency' element={<Emergency />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    <Footer />
  </>
}



export default App
