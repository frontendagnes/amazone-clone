import React, { useState } from "react";
import "./Header.css";
//.mui
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

import { Link } from "react-router-dom";
//state
import { useStateValue } from "../../utility/StateProvider";
//api
import { auth } from "../../utility/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const headerSearchStyle = searchActive
    ? "header__search header__search--acvtive"
    : "header__search";

  return (
    <div className="header" id="header">
      <Link to="/">
      <div className="header__logo">
        <p>Store</p>
        <CallMissedOutgoingIcon style={{color: "#f49934", fontSize: 42}}/>
      </div>
        {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        /> */}
      </Link>
      <div className={headerSearchStyle}>
        <input
          className="header__searchInput"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        />
        <SearchIcon className="header__searchIcon" fontSize="large" />
      </div>
      <div className="heaer__nav">
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Witamy, {user ? user.email : "Gościu"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Wyloguj się" : "Zaloguj się"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Zwroty</span>
            <span className="header__optionLineTwo">i Zamówienia</span>
          </div>
        </Link>
        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
