import StarItem from "./starItem/starItem";
import s from "./star.module.scss";
import React, { useEffect, useState } from "react";
const Star = ({
  favorite,
  addToBasket,
  theme,
  removeFromFavorite,
  decreaseCountStar,
  updateFavoriteStatus,
  setIsFavoriteState,
}) => {
  return (
    <div className={s.star}>
      <h1 className={theme === "light" ? s.light_t : s.dark_t}>
        {" "}
        Favorite List
      </h1>
      <div className={s.star__grid}>
        {favorite.length > 0 ? (
          favorite.map((el) => (
            <StarItem
              key={el.id} 
              updateFavoriteStatus={updateFavoriteStatus}
              decreaseCountStar={decreaseCountStar}
              removeFromFavorite={removeFromFavorite}
              className={`${s.star__grid__item} ${
                theme === "light" ? s.light : s.dark
              }`}
              firstClick={addToBasket}
              items={el}
              setIsFavoriteState={setIsFavoriteState}
            />
          ))
        ) : (
          <p
            className={`${s.fixedP} ${
              theme === "light" ? s.light_t : s.dark_t
            }`}
          >
            No favorite items yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Star;
