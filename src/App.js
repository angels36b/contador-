import './App.css';
import Boton from './componentes/Boton';
import playCodeLogo from  './imagenes/Logo.jpg'
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>

      <div classNanem='play-logo-contenedor'>
        <img 
            className='play-logo'
            src= {playCodeLogo} 
            alt='Logo de play' />       
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
