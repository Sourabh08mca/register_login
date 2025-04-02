import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Hero from './component/Hero'
import Registrationpage from './pages/Registrationpage'
import Loginpage from './pages/Loginpage'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage/>}></Route>
          <Route path='/register' element={<Registrationpage/>}></Route>
          <Route path='/login' element={<Loginpage/>}></Route>
          <Route path='/hero' element={<Hero/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
