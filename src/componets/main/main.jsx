import React from "react";
import PropTypes from "prop-types";
import s from "./main.module.scss";
import { useState, useEffect } from "react";
import MainItems from "./mainItems/mainItems";
const Main = ({
  increaseCountStar,
  decreaseCountStar,
  theme,
  addToFavorite,
  removeFromFavorite,
  setIsFavoriteState,
  addToBasket,
}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className={s.main}>
      <div className={s.main__grid}>
        {products &&
          products.map((el) => (
            <MainItems
              key={el.id}
              decreaseCountStar={decreaseCountStar}
              starClick={increaseCountStar}
              firstClick={addToBasket}
              items={el}
              className={`${s.main__grid__item} ${
                theme === "light" ? s.light : s.dark
              }`}
              theme={theme}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
              setIsFavoriteState={setIsFavoriteState}
            />
          ))}
      </div>
    </div>
  );
};

Main.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  increaseCountStar: PropTypes.func.isRequired,
  decreaseCountStar: PropTypes.func.isRequired,
};

export default Main;
