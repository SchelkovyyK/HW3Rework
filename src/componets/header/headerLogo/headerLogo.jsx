import PropTypes from "prop-types";
const HeaderLogo = ({ className }) => {
  return (
    <div className={className}>
      <img src="https://static.thenounproject.com/png/18791-200.png" alt="" />
      <h1>Rubics Store</h1>
    </div>
  );
};
HeaderLogo.propTypes = {
  className: PropTypes.string.isRequired,
};
export default HeaderLogo;
