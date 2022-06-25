import React,{useState} from "react"
import umodel from "../assets/umodel.png"
import ChangeCred from "./ChangeCred"
import Modal from 'react-modal'
import ConnectionForm from "./ConnectionForm"
  

const Connection = ()=>{
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    } 

    return (
        <div className="connection-container">
            <div class="txt"><div className="conn-sym"></div><div className="connected-txt">Umbo Connected</div></div>
            <img src={umodel} className="rain-logo" alt="weather-logo"/>
            <div className="cred_container" ><ChangeCred handleClick={()=>openModal()}/></div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal"
            >
                <ConnectionForm closeForm={()=>closeModal()}/>
      </Modal>
        </div>
    )
}

export default Connection

