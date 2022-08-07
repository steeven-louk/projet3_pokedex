import { Home } from "./views/home/home";
import { HeaderComponent } from "./components/headerComp/headerComponent";
import { Details } from "./views/details/details";
import { Pokedex } from "./views/pokedex/pokedex";

import { Route, Routes } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div className="App">
      <HeaderComponent />

      {/****Mise en place des route de l'application */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/about/:id" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
