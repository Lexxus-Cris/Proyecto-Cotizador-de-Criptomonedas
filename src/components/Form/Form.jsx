import React, {useEffect, useState} from 'react';
import axios from 'axios';

import useCriptomoneda from '../../hooks/useCriptomoneda';
import useMoneda from '../../hooks/useMoneda';

import { Boton } from './styles';

const Form = () => {

   // state para la validacion del form
   const [error, setError] = useState(false)

   // state del listado de criptomonedas
   const [listCripto, setListCripto] = useState([]);

   // Array donde almacenaremos las monedas

   const MONEDAS = [
      { codigo: 'USD', nombre: 'Dolar Americano'},
      { codigo: 'MXN', nombre: 'Peso Mexicano'},
      { codigo: 'CAD', nombre: 'Dolar Canadiense'},
      { codigo: 'EUR', nombre: 'Euro'},
      { codigo: 'GBP', nombre: 'Libra Esterlina'}
   ]

   // Utilizamos el custom hook useMoneda
   const [moneda, SeleccionarMoneda ] = useMoneda('Elige tu moneda', '', MONEDAS);

   // Implementacion de useCriptomoneda
   const [ criptomoneda, SeleccionarCripto ] = useCriptomoneda ('Elige la criptomoneda', '', listCripto)

   
   // Ejecutar llamado a la API
   useEffect(() => {
      const consultarAPI = async () => {
         const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
         const response = await axios.get(API_URL);
         
         setListCripto(response.data.Data)
      }
      consultarAPI()
   }, [])
   
   const handleSubmit = e => {
      e.preventDefault();

      // validar ambos campos
      if (moneda === '' || criptomoneda === '') {
         setError(true);
         return;
      }

      setError(false);

      // Pasamos los datos al componenete principal


   }

   return (
      <form
         onSubmit={handleSubmit}
      >
         {error ? 'Hay un error' : null}
         <SeleccionarMoneda />
         <SeleccionarCripto />
         <Boton 
            type="submit"
         >Calcular</Boton>
         
      </form>
   )
}

export default Form;
