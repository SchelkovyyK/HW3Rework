import s from "./ModalClose.module.scss";
import PropTypes from "prop-types";
import { MdOutlineClose } from "react-icons/md";
const ModalClose = ({ onClick }) => {
  return (
    <div className={s.divPlacemet}>
      <button onClick={onClick}>
        <MdOutlineClose />
      </button>
    </div>
  );
};
ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ModalClose;
