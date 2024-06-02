import PropTypes from "prop-types";
const HeaderUl = ({ className }) => {
  return (
    <ul className={className}>
      <li>3x3</li>
      <li>4x4</li>
      <li>5x5</li>
      <li>other puzles</li>
    </ul>
  );
};
HeaderUl.propTypes = {
  className: PropTypes.string.isRequired,
};
export default HeaderUl;
