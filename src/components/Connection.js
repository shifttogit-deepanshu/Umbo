import React,{useState,useEffect} from "react"
import umodel from "../assets/umodel.png"
import ChangeCred from "./ChangeCred"
import Modal from 'react-modal'
import ConnectionForm from "./ConnectionForm"
  

const Connection = (props)=>{
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [cred,setCred] = useState({})
  
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

    useEffect(()=>{
      setCred({id:props.data.id,psk:props.data.psk})
    },[props.data])

    return (
        <div className="connection-container">
            <div class="txt"><div className="conn-sym"></div><div className="connected-txt">Umbo Connected</div></div>
            <div className="creds">
              <div>id: {cred.id}</div>
              <div>psk: {cred.psk}</div>
            </div>
            <img src={umodel} className="rain-logo" alt="weather-logo"/>
            <div className="cred_container" ><ChangeCred handleClick={()=>openModal()}/></div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal"
            >   <button className="exit" onClick={()=>closeModal()}>X</button>
                <ConnectionForm closeForm={()=>closeModal()}/>
      </Modal>
        </div>
    )
}

export default Connection

