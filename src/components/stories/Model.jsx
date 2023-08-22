// StoryModal.jsx
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

Modal.setAppElement("#root"); // Set the root element for accessibility

const StoryModal = ({ isOpen, onRequestClose, imageUrl, name, profilePic }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
    <div className="statusof">
        
        <img className="user" src={profilePic} alt="User Profile" />
        <br/><span>{name} </span><br /><span style={{fontWeight:100,fontSize:'12px'}}>Updated 4 min ago</span>
      </div>
      <img src={imageUrl} alt="Story" />
      <p style={{float:'right',cursor:'pointer'}} onClick={onRequestClose}>❌</p>
      
    </Modal>
  );
};


export default StoryModal;
