import React, { Fragment, useState } from 'react'
import { Label, Select } from './styles';

const useCriptomoneda = (label, initialState, Criptomonedas) => {

   // State del custom Hook

   const [criptomoneda, setCriptomoneda] = useState(initialState);

   const handleChange = e => {
      setCriptomoneda({
         [e.target.name]: e.target.value
      })
   }

   const SeleccionarCripto = () => (
      <Fragment>
         <Label htmlFor="currency">{label}</Label>
         <Select
            name="currency"
            id="currency"
            onChange={handleChange}
            value={criptomoneda}
         >
            {/* <option value="">-- Elige una opcion --</option>
            {Criptomonedas.map(criptomoneda => (
               <option key={criptomoneda.codigo} value={criptomoneda.codigo}>{criptomoneda.nombre}</option>
            ))} */}
         </Select>
      </Fragment>
   );

   // Retornar state, interdaz y funcion que modifica el state
   return [criptomoneda, SeleccionarCripto, setCriptomoneda]
}

export default useCriptomoneda;
