import React from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonsSemantic from "views/buttons/ButtonSemantic"
import Input from "views/input/InputSemantic"
import Img from "views/imagen/ImagenSemantic"
import Label from "views/label/LabelSemantic"

function App() {
  return (
    <div className="App">
      <ButtonsSemantic />
      <Input />
      <Img />
      <Label />
    </div>
  );
}

export default App;
