import React from 'react';

import useMoneda from '../../hooks/useMoneda/useMoneda';

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

   // Utilizamos el custom hook
   const [moneda, Seleccionar ] = useMoneda('Elige tu moneda', '', MONEDAS);

   const handleSubmit = e => {
      e.preventDefault()
   }

   return (
      <form
         onSubmit={handleSubmit}
      >
         <Seleccionar />
         <Boton 
            type="submit"
         >Calcular</Boton>
         
      </form>
   )
}

export default Form;
