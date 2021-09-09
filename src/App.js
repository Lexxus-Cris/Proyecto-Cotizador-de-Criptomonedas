import { useState, useEffect } from "react";
import axios from "axios";

import { Contenedor, Imagen, Heading } from "./styles";
import image from './img/cryptomonedas.png';

import Form from './components/Form/Form';

import useModal from "./hooks/useModal";
import Spinner from './components/Spinner/Spinner';

function App() {

  const [coin, setCoin] = useState('');
  const [criptoCoin, setCriptoCoin] = useState('');

  // State que almacenara la informacion de la peticion a la API
  const [results, setResults] = useState({});

  // Mostar spinner
  const [spinner, setSpinner] = useState(false)

  // State que abrira el modal
  const [modal, setModal] = useState(false);

  // Trayendo la info de custom Hook
  const [Modal] = useModal(results, coin, criptoCoin, modal, setModal);
  
  useEffect(() => {
    
    const cotizarCripto = async () => {
      // Evitamos el primer renderizado del componente
      if (coin === '')  return;
      
      // Consultar API
      const API_URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`;
      const response = await axios.get(API_URL);

      // Mostrar spinner
      setSpinner(true);

      // Ocultar spinner y mostrar resultado
      setTimeout(() => {
        setSpinner(false)

        setResults(response.data.DISPLAY[criptoCoin][coin])
      }, 3000);
    }

    cotizarCripto()

  }, [coin, criptoCoin]);

  // Mostrar spinner o resultado
  const componente = (spinner) ? <Spinner /> : <Modal />

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
        { componente}

      </div>
    </Contenedor>
  );
}

export default App;
