
import { Home } from './views/home/home'
import { HeaderComponent } from './components/headerComp/headerComponent'
import { Details } from './views/details/details'

import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Pokedex } from './views/pokedex/pokedex'

function App() {
 

  return (
    <div className="App">
    <HeaderComponent />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/about/:id" element={<Details />} />
      </Routes>
      
    </div>
  )

  
}

export default App
