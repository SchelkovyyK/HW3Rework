import React from "react";
import PropTypes from "prop-types"
import "./button.scss"
const Button = ({type, classNames, onClick, children}) => {
  return (
      <button type={type} className={classNames} onClick={onClick}>
        {children}
      </button>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]), 
  classNames: PropTypes.string, 
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired, 
};
export default Button;
