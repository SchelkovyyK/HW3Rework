import s from "./ModalBody.module.scss"
import PropTypes from "prop-types"
const ModalBody = ({ children }) => {
  return <div className={s.bodyEl}>{children}</div>;
};
ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ModalBody;
