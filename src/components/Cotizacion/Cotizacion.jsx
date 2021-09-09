import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


const Cotizacion = ({results, moneda, criptomoneda, setModal, modal}) => {

   // Si el componente recibe un objeto vacio no retorna nada
   if (Object.keys(results).length === 0) return null;

   return (
      <Modal
         isOpen={modal}
      >
         <ModalHeader>
            Cotizacion de {criptomoneda} a {moneda}
         </ModalHeader>
         <ModalBody>
            <p>El precio es: <span>{results.PRICE}</span></p>
            <p>Precio más alto del día: <span>{results.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{results.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{results.CHANGEPCT24HOUR}</span></p>
            <p>Última Actualización: <span>{results.LASTUPDATE}</span></p>
         </ModalBody>
         <ModalFooter>
            <Button
               onClick={() => setModal(false)}
               color="primary"
            >Cerrar</Button>
         </ModalFooter>
      </Modal>
   )
}

export default Cotizacion
