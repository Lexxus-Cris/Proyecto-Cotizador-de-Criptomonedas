import React, { Fragment, useState} from 'react'
import { Label, Select } from './styles';

const useMoneda = (label, initialState, Monedas) => {
   
   // State del custom Hook

   const [moneda, setMoneda] = useState(initialState);

   const handleChange = e => {
      setMoneda({
         [e.target.name] : e.target.value
      })
   }

   const Seleccionar = () => (
      <Fragment>
         <Label htmlFor="currency">{label}</Label>
         <Select
            name="currency"
            id="currency"
            onChange={handleChange}
            value={moneda}
         >
            <option value="">-- Elige una opcion --</option>
            {Monedas.map(moneda => (
               <option  key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
            ))}
         </Select>
      </Fragment>
   );

   // Retornar state, interdaz y funcion que modifica el state
   return [moneda, Seleccionar, setMoneda]
}

export default useMoneda
