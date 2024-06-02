import React from "react";
import { MdOutlineClose } from "react-icons/md";
import ModalImage from "../../ModalComponets/modals/ModalImage/ModalImage";
import { useState } from "react";
const CartItems = ({ items, className, removeFromBasket, theme }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={className}>
      <img src={items.img} alt="" />
      <h2>{items.name}</h2>
      <p>{items.price}</p>
      <ModalImage
        theme={theme}
        firstText="No, cancel"
        secondaryText="Yes, delete"
        firstClick={() => setOpenModal(false)}
        secondaryClick={() => {
          removeFromBasket(items);
          setOpenModal(false);
        }}
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <img src={items.img} alt="" />
        <h2>Remove "{items.name}" from basket</h2>
        <p>{items.price}</p>
      </ModalImage>
      <MdOutlineClose onClick={() => setOpenModal(true)} />
    </div>
  );
};

export default CartItems;
