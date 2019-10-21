import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
//import './App.css';
import Frase from './components/Frase';
import axios from 'axios';

function App() {

  const [frase, obtenerFrase] = useState({});

  const fetchAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    obtenerFrase(resultado.data[0]);
  }

  useEffect( 
    () => {
      fetchAPI();
    }, []
  )

  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />
      <button
        onClick={fetchAPI}
      >Generar Nueva Frase</button>
    </div>
  );
}

export default App;
