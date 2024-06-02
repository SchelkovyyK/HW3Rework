import PropTypes from "prop-types";
import React from "react";
const HeaderIcons = ({ children, className, onClick }) => {
  return <div onClick={onClick} className={className}>{children}</div>;
};
HeaderIcons.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default HeaderIcons;
