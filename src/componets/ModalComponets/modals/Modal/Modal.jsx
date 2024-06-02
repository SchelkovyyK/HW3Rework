import React from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalClose from "../ModalClose/ModalClose";
import PropTypes from "prop-types"
const Modal = ({ open, closeModal, children }) => {
  if (!open) return null;
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalClose onClick={closeModal} />
      {children}
    </ModalWrapper>
  );
};
Modal.propTypes = {
  open: PropTypes.bool, 
  closeModal: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired, 
};
export default Modal;
