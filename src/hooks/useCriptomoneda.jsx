import React, { Fragment, useState } from 'react'
import { Label, Select } from './styles';

const useCriptomoneda = (label, initialState, Criptomonedas) => {

   // State del custom Hook

   const [criptomoneda, setCriptomoneda] = useState(initialState);

   const handleChange = e => {
      setCriptomoneda(e.target.value)
   }

   const SeleccionarCripto = () => (
      <Fragment>
         <Label htmlFor="criptomoneda">{label}</Label>
         <Select
            name="criptomoneda"
            id="criptomoneda"
            onChange={handleChange}
            value={criptomoneda}
         >
            <option value="">-- Seleccione una criptomoneda --</option>
            {Criptomonedas.map(criptomoneda => (
               <option key={criptomoneda.CoinInfo.Id} value={criptomoneda.CoinInfo.Name}>{criptomoneda.CoinInfo.FullName}</option>
            ))}
         </Select>
      </Fragment>
   );

   // Retornar state, interdaz y funcion que modifica el state
   return [criptomoneda, SeleccionarCripto, setCriptomoneda]
}

export default useCriptomoneda;
