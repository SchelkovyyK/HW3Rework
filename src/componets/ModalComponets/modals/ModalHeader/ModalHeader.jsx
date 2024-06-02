import s from "./ModalHeader.module.scss"
import PropTypes from "prop-types"
const ModalHeader = ({ children }) => {
  return <div className={s.headerEl}>{children}</div>;
};
ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalHeader;
