import React, { Fragment, useState} from 'react'

const useMoneda = () => {
   
   // State del custom Hook

   const [moneda, setMoneda] = useState()

   const Seleccionar = () => (
      <Fragment>
         <label htmlFor="currency">Moneda</label>
         <select name="currency" id="currency">
            <option value="MXN">Peso mexicano</option>
         </select>
      </Fragment>
   );

   // Retornar state, interdaz y funcion que modifica el state
   return [moneda, Seleccionar, setMoneda]
}

export default useMoneda
