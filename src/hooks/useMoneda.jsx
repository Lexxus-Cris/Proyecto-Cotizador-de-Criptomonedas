import React, { Fragment, useState} from 'react'

const useMoneda = (label, initialState, Monedas) => {
   
   // State del custom Hook

   const [moneda, setMoneda] = useState(initialState)

   const Seleccionar = () => (
      <Fragment>
         <label htmlFor="currency">{label}</label>
         <select name="currency" id="currency">
            <option value="">-- Elige una opcion --</option>
            {Monedas.map(moneda => (
               <option  key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
            ))}
         </select>
      </Fragment>
   );

   // Retornar state, interdaz y funcion que modifica el state
   return [moneda, Seleccionar, setMoneda]
}

export default useMoneda
