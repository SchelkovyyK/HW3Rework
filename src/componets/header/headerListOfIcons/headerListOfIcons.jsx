import React from "react";
import s from "./headerListOfIcons.module.scss";
import { FaShoppingBasket, FaSun, FaMoon, FaHome } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import HeaderIcons from "../headerIIcons/headerIcons";
const HeaderListOfIcons = ({
  countStar,
  countBasket,
  changeTheme,
  theme,
  className,
}) => {
  return (
    <div className={s.placement}>
      <Link className={s.placement__link} to="/Cart">
        <HeaderIcons className={className}>
          <FaShoppingBasket />
          <span>{countBasket}</span>
        </HeaderIcons>
      </Link>
      <Link className={s.placement__link} to="/Star">
        <HeaderIcons className={className}>
          <MdOutlineStarPurple500 />
          <span>{countStar}</span>
        </HeaderIcons>
      </Link>
      <Link className={s.placement__link} to="/">
        <HeaderIcons className={className}>
          <FaHome />
        </HeaderIcons>
      </Link>

      <HeaderIcons onClick={changeTheme} className={className}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </HeaderIcons>
    </div>
  );
};

export default HeaderListOfIcons;
