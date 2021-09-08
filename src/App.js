import { useState, useEffect } from "react";
import { Contenedor, Imagen, Heading } from "./styles";
import image from './img/cryptomonedas.png';

import Form from './components/Form/Form';

function App() {

  const [coin, setCoin] = useState('');
  const [criptoCoin, setCriptoCoin] = useState('');

  useEffect(() => {

    // Evitamos el primer renderizado del componente
    if (moneda === ' ')  return;

    
  }, [coin, criptoCoin])

  return (
    <Contenedor>
      <div className="">
        <Imagen
          src={image}
          alt="Imagen criptomonedas"
        />
      </div>
      <div className="">
        <Heading>Cotiza criptomonedas al instante</Heading>

        <Form 
          guardarMoneda={setCoin}
          guardarCriptomoneda={setCriptoCoin}
        />
      </div>
    </Contenedor>
  );
}

export default App;
