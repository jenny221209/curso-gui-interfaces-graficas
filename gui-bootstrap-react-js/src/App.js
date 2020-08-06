import React from 'react';
import './App.css';

// Componentes
import ButtonBootstrap from "views/button/ButtonBootstrap"
import Cards from "views/cards/Cards"
import Forms from "views/form/Form"
import Imagen from "views/imagen/Imagen"
import Navbar from "views/navbar/Navbar"
import Tabs from "views/tabs/Tabs"

function App() {
  return (
    <div className="App">

      < ButtonBootstrap />
      < Cards />
      < Forms />
      < Imagen />
      < Navbar />
      <Tabs />

    </div>
  );
}

export default App;
