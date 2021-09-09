import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { ResultsCont, Precio, Info } from './styles';


const Cotizacion = ({results, moneda, criptomoneda, setModal, modal}) => {

   const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = results;

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
            <ResultsCont>
               <Precio>El precio es: <span>{PRICE}</span></Precio>
               <Info>Precio más alto del día: <span>{HIGHDAY}</span></Info>
               <Info>Precio más bajo del día: <span>{LOWDAY}</span></Info>
               <Info>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Info>
               <Info>Última Actualización: <span>{LASTUPDATE}</span></Info>
            </ResultsCont>
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
