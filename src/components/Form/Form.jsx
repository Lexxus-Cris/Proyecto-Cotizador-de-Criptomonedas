import React from 'react';
import useCriptomoneda from '../../hooks/useCriptomoneda';

import useMoneda from '../../hooks/useMoneda';

import { Boton } from './styles';

const Form = () => {

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
   const [ criptomoneda, SeleccionarCripto ] = useCriptomoneda ('Elige la criptomoneda', '')

   const handleSubmit = e => {
      e.preventDefault()
   }

   return (
      <form
         onSubmit={handleSubmit}
      >
         <SeleccionarMoneda />
         <SeleccionarCripto />
         <Boton 
            type="submit"
         >Calcular</Boton>
         
      </form>
   )
}

export default Form;
