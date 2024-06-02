
import PropTypes from "prop-types"
import React from "react";
import s from "./ModalWrapper.module.scss";

const ModalWrapper = ({ children, onClick }) => {
  return (
    <div className={s.modalBack} onClick={onClick}>
      <div className={s.body}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ModalWrapper;
