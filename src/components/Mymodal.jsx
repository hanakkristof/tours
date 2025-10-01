import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Mymodal=({modal, setModal, selImg, selPrice, selInfo})=> {
  

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        
        <ModalBody >
          <img className='d-flex' style={{maxWidth:"100%", maxHeight:"100%"}} src={selImg} alt="" />
          <div className='mt-4'>{selInfo}</div>
          <div className='mt-4'>{selPrice}€</div>
        </ModalBody>
        
      </Modal>
    </div>
  );
}
