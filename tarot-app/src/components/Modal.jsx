import React from "react";
import "../styles/Modal.css";

const Modal = ({ isOpen, onClose, meaning }) => {
  if (!isOpen || !meaning) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">{meaning.arcaneName}</h2>
        <p className="modal-text">{meaning.arcaneDescription}</p>
        {meaning.goddessName && <p>Diosa: {meaning.goddessName}</p>}
      </div>
    </div>
  );
};


export default Modal;






