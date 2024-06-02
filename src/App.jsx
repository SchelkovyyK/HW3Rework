import { useState, useEffect } from "react";
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./componets/cart/cart";
import "./App.css";
import Star from "./componets/star/star";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : "light";
  });
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [countBasket, setCountBasket] = useState(() => {
    const savedCount = localStorage.getItem("countBasket");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  const [countStar, setCountStar] = useState(() => {
    const savedCount = localStorage.getItem("countStar");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  useEffect(() => {
    localStorage.setItem("countBasket", JSON.stringify(countBasket));
  }, [countBasket]);

  useEffect(() => {
    localStorage.setItem("countStar", JSON.stringify(countStar));
  }, [countStar]);
  const increaseCountStar = () => {
    setCountStar((prevCount) => prevCount + 1);
  };
  const decreaseCountStar = () => {
    setCountStar((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0));
  };
  //! favorite
  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorite(JSON.parse(storedFavorites));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);
  const addToFavorite = (item) => {
    setFavorite([...favorite, item]);
  };
  const removeFromFavorite = (item) => {
    setFavorite(favorite.filter((favo) => favo.id !== item.id));
    setIsFavoriteState(item.id, false);
  };
  const setIsFavoriteState = (id, state) => {
    localStorage.setItem(`${id}_isFavorite`, JSON.stringify(state));
  };
  // ! Basket
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });
  useEffect(() => {
    const storedBasket = localStorage.getItem("basket");
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  const addToBasket = (item) => {
    let isInArray = false;
    basket.forEach((element) => {
      if (element.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setCountBasket((prevCount) => prevCount + 1);
      setBasket([...basket, item]);
    }
  };
  const removeFromBasket = (item) => {
    setBasket(basket.filter((favo) => favo.id !== item.id));
    setCountBasket((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0));
  };
  return (
    <>
      <Router>
        <Header
          countBasket={countBasket}
          countStar={countStar}
          changeTheme={changeTheme}
          theme={theme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                addToBasket={addToBasket}
                decreaseCountStar={decreaseCountStar}
                increaseCountStar={increaseCountStar}
                theme={theme}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
                setIsFavoriteState={setIsFavoriteState}
              />
            }
          ></Route>
          <Route
            path="/Star"
            element={
              <Star
                theme={theme}
                addToBasket={addToBasket}
                favorite={favorite}
                removeFromFavorite={removeFromFavorite}
                decreaseCountStar={decreaseCountStar}
                setFavorite={setFavorite}
                setIsFavoriteState={setIsFavoriteState}
              ></Star>
            }
          ></Route>
          <Route
            path="/Cart"
            element={
              <Cart
                removeFromBasket={removeFromBasket}
                basket={basket}
                theme={theme}
              ></Cart>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
