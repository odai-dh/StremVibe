import React from "react";
import "../../css/modal.css";
import { IoMdClose } from "react-icons/io";

export default function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    // Modal overlay to show the Trailer in a popup window
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <IoMdClose size={30} />
        </button>
        {children}
      </div>
    </div>
  );
}