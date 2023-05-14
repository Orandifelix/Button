import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo (props){
    const [modalIsOpen ,setModalIsOpen] =useState(false);
    function handleButton(){
        setModalIsOpen(true)
        console.log("I  was clicked");  
        console.log(props.text);
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return (
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions"><button className="btn" onClick = {handleButton}>Delete</button>
        </div>
        {modalIsOpen && <Modal  onCancel={closeModal} onConfirm={closeModal} /> }
        {modalIsOpen && <Backdrop onClick = {closeModal} />}
        
        
        
      </div>
    )

}

export default Todo;    