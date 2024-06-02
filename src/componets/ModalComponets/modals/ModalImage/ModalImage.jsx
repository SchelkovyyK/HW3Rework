import Modal from "../Modal/Modal";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../../buttons/buttons";
import { useState } from "react";
import PropTypes from "prop-types";
const ModalImage = ({
  children,
  firstText,
  firstClick,
  secondaryClick,
  secondaryText,
  openModal,
  setOpenModal,
  button = false,
}) => {
  return (
    <>
      {button && (
        <Button
          type="button"
          classNames="primary-button"
          onClick={() => setOpenModal(true)}
        >
          Click me
        </Button>
      )}
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        <ModalBody>
          <ModalHeader>{children}</ModalHeader>
          <ModalFooter
            firstText={firstText}
            secondaryText={secondaryText}
            firstClick={firstClick}
            secondaryClick={secondaryClick}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

ModalImage.propTypes = {
  children: PropTypes.node.isRequired,
  firstText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ModalImage;
