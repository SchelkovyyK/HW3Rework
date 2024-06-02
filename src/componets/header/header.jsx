import s from "./header.module.scss";
import React from "react";
import HeaderLogo from "./headerLogo/headerLogo";
import HeaderUl from "./headerUl/headerUl";
import PropTypes from "prop-types";
import HeaderListOfIcons from "./headerListOfIcons/headerListOfIcons";
const Header = ({ countStar, countBasket, changeTheme, theme }) => {
  return (
    <div className={`${s.header} ${theme === "light" ? s.light : s.dark}`}>
      <HeaderLogo className={s.header__logo} />
      <div className={s.header__list}>
        <HeaderUl className={s.header__list__ul} />
        <HeaderListOfIcons
          className={s.header__list__basket}
          countStar={countStar}
          countBasket={countBasket}
          changeTheme={changeTheme}
          theme={theme}
        ></HeaderListOfIcons>
      </div>
    </div>
  );
};
Header.propTypes = {
  countStar: PropTypes.number.isRequired,
  countBasket: PropTypes.number.isRequired,
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
export default Header;
