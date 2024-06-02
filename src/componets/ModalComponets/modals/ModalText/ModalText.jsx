import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import Button from "../../buttons/buttons";
import { useState } from "react";
const ModalText = ({ children, firstText, firstClick, theme }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick = () => {
    firstClick();

    setOpenModal(false);
  };
  return (
    <>
      <Button
        type="button"
        classNames={`primary-button ${
          theme === "light" ? "light_b" : "dark_b"
        }`}
        onClick={() => setOpenModal(true)}
      >
        Add to the cart
      </Button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        <ModalBody>
          <ModalHeader>{children}</ModalHeader>

          <ModalFooter firstClick={handleButtonClick} firstText={firstText} />
        </ModalBody>
      </Modal>
    </>
  );
};

ModalText.propTypes = {
  children: PropTypes.node,
  firstClick: PropTypes.func,
  firstText: PropTypes.string,
};

export default ModalText;
