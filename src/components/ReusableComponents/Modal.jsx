import React from "react"

const Modal = ({ isShowing, title, children, onCloseModal }) => {
  return (
    <div
      className={`Modal ${isShowing ? "Modal--show" : ""} | modal`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-light">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onCloseModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
