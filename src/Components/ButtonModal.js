import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import Modal from './Modal';


const ButtonModal = () => {

    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const nodeRef = useRef(null);

    const onClickOpenModal = () =>{
        setOpenModal(!openModal);
    }

    const handlerCloseModal = () => {
        setCloseModal(!closeModal);
    }


    return (
        <>
            <button onClick={onClickOpenModal}>Open Modal </button>
            
            <CSSTransition
            in={openModal}
            timeout={300}
            nodeRef={nodeRef}
            classNames="fadeLeft"
            unmountOnExit                     
           >
             <Modal nodeRef={nodeRef} isOpen={openModal} isClose={handlerCloseModal} titleModal="Test Modal">
               <p>Test</p>
             </Modal> 
        </CSSTransition>
        </>
    )
}

export default ButtonModal;