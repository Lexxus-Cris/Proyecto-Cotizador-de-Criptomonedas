import { useState, useEffect } from "react";
import axios from "axios";

import { Contenedor, Imagen, Heading } from "./styles";
import image from './img/cryptomonedas.png';

import Form from './components/Form/Form';

import useModal from "./hooks/useModal";

function App() {

  const [coin, setCoin] = useState('');
  const [criptoCoin, setCriptoCoin] = useState('');
  const [results, setResults] = useState({});

  const [modal, setModal] = useState(false);

  const [Modal] = useModal(results, coin, criptoCoin, modal, setModal);
  
  useEffect(() => {
    
    const cotizarCripto = async () => {
      // Evitamos el primer renderizado del componente
      if (coin === '')  return;
      
      // Consultar API
      const API_URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`;
      const response = await axios.get(API_URL);
      setResults(response.data.DISPLAY[criptoCoin][coin])
    }

    cotizarCripto()

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
          setModal={setModal}
        />
        { modal ? <Modal /> : null}
        

      </div>
    </Contenedor>
  );
}

export default App;
