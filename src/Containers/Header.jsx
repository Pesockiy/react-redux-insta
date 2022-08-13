import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Components/Logo";
import Toggler from "../Components/Toggler";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__inner container">
        <Logo />

        <nav>
          <Link to="/">Main</Link>
          <Link to="signup">Signup</Link>
        </nav>

        <Toggler />
      </div>
    </div>
  );
};

export default Header;
