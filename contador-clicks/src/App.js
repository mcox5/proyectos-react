import './App.css';
import './stylesheets/button.css';
import Button from "./components/button";
import Counter from './components/contador';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0);


  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0)
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Counter
          numClics={numClics}
        />
        <Button
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
        <Button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
