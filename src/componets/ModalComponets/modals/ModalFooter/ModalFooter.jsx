import s from "./ModalFooter.module.scss";
import PropTypes from "prop-types";
const ModalFooter = ({
  firstText,
  secondaryText,
  firstClick,
  secondaryClick,
}) => {
  return (
    <div className={s.ButtonPlacement}>
      {firstText && (
        <button onClick={firstClick} className={s.firstButton}>
          {" "}
          {firstText}
        </button>
      )}
      {secondaryText && (
        <button onClick={secondaryClick} className={s.secondButton}>
          {secondaryText}
        </button>
      )}
    </div>
  );
};
ModalFooter.propTypes = {
  firstText: PropTypes.string,
  secondaryText: PropTypes.string,
  firstClick: PropTypes.func,
  secondaryClick: PropTypes.func,
};
export default ModalFooter;
