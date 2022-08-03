import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './views/home/home'
import { HeaderComponent } from './components/headerComp/headerComponent'
import { Details } from './views/details/details'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <div className="App">
    <HeaderComponent />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<Details />} />
      </Routes>
    </div>
  )

  
}

export default App
