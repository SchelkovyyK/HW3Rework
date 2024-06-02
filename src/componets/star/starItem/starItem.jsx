import React from "react";
import { useState, useEffect } from "react";
import ModalText from "../../ModalComponets/modals/ModalText/ModalText";
import { MdOutlineStarPurple500 } from "react-icons/md";
const StarItem = ({
  items,
  firstClick,
  className,
  removeFromFavorite,
  decreaseCountStar,
  setIsFavoriteState,
}) => {

  const remover = () => {
    decreaseCountStar();
    removeFromFavorite(items);
    setIsFavoriteState(items.id, false);
  };
  return (
    <div className={className}>
      <img src={items.img} alt="" />
      <h2>{items.name}</h2>
      <p>{items.price}</p>
      <ModalText firstClick={() => firstClick(items)} firstText="Add to basket">
        <h2>Add "{items.name}" to the basket</h2>
        <p>Price: {items.price}</p>
      </ModalText>
      <MdOutlineStarPurple500
        onClick={() => remover()}
        style={{ fill: "yellow" }}
      />
    </div>
  );
};

export default StarItem;
