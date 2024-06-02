import React from "react";
import CartItems from "./cartItems/cartItems";
import s from "./cart.module.scss";
const Cart = ({ theme, basket, removeFromBasket }) => {
  return (
    <div className={s.cart}>
      <h1 className={theme === "light" ? s.light_t : s.dark_t}>
        Products List
      </h1>
      <div className={s.cart__grid}>
        {basket.length > 0 ? (
          basket.map((elem) => (
            <CartItems
              key={elem.id}
              className={`${s.cart__grid__item} ${
                theme === "light" ? s.light : s.dark
              }`}
              items={elem}
              removeFromBasket={removeFromBasket}
            />
          ))
        ) : (
          <p
            className={`${s.fixedP} ${
              theme === "light" ? s.light_t : s.dark_t
            }`}
          >
            No Products yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
