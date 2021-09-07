import React from 'react';

import useMoneda from '../../hooks/useMoneda';

import { Boton } from './styles';

const Form = () => {

   // Utilizamos el custom hook
   const [moneda, Seleccionar, setMoneda ] = useMoneda();

   return (
      <form>
         <Seleccionar />
         <Boton 
            type="submit"
         >Calcular</Boton>
         
      </form>
   )
}

export default Form;
