import React from "react"

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal_header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src="../images/icon-close.svg" alt="Close" srcset="" />
          </button>
        </div>
        <img src="../images/image-rules.svg" alt="Rules" srcset="" />
      </div>
    </div>,
    document.getElementById("modal")
  )
}

export default Modal
