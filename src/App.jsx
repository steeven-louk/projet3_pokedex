import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './views/home/home'
import { HeaderComponent } from './components/headerComp/headerComponent'
import { Details } from './views/details/details'

function App() {
 

  return (
    <div className="App">
      <HeaderComponent />
      {/** <Details />*/}
       <Home />
    </div>
  )

  
}

export default App
