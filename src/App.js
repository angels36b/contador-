import './App.css';
import Boton from './componentes/Boton';
import playCodeLogo from  './imagenes/Logo.jpg'


function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}  
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
