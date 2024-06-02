import ModalText from "../../ModalComponets/modals/ModalText/ModalText";
import PropTypes from "prop-types";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState, useEffect } from "react";
import { WiDaySnow } from "react-icons/wi";
const MainItems = ({
  items,
  className,
  firstClick,
  starClick,
  decreaseCountStar,
  theme,
  addToFavorite,
  removeFromFavorite,
  setIsFavoriteState,
}) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const data = localStorage.getItem(`${items.id}_isFavorite`);
    return data !== null ? JSON.parse(data) : false;
  });
  useEffect(() => {
    localStorage.setItem(`${items.id}_isFavorite`, JSON.stringify(isFavorite));
  }, [isFavorite, items.id]);

  const handleAddToFavorite = (event) => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      starClick();
      addToFavorite(items);
    } else {
      decreaseCountStar();
      removeFromFavorite(items);
    }
    setIsFavoriteState(items.id, !isFavorite);
  };
  return (
    <div className={className}>
      <img src={items.img} alt="" />
      <h2>{items.name}</h2>
      <p>Price: {items.price}</p>
      <ModalText
        theme={theme}
        firstClick={() => firstClick(items)}
        firstText="Add to basket"
        
      >
        <h2>Add "{items.name}" to the basket</h2>
        <p>Price: {items.price}</p>
      </ModalText>
      <MdOutlineStarPurple500
        onClick={handleAddToFavorite}
        style={{ fill: isFavorite ? "yellow" : "black" }}
      />
    </div>
  );
};
MainItems.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
  firstClick: PropTypes.func.isRequired,
  starClick: PropTypes.func.isRequired,
  decreaseCountStar: PropTypes.func.isRequired,
};
export default MainItems;
