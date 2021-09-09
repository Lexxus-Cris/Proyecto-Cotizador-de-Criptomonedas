import React from 'react'

import Cotizacion from '../components/Cotizacion/Cotizacion'

const useModal = (results, coin, criptoCoin, modal, setModal) => {

   const Modal = () => (
      <Cotizacion
         results={results}
         moneda={coin}
         criptomoneda={criptoCoin}
         modal={modal}
         setModal={setModal}
      />
   )
   return [Modal];
}

export default useModal
