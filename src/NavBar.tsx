
import React from "react";
import { Link } from "@reach/router";
import { css } from '@emotion/css'

const NavBar = () => (
  <header className={css({ background: '#8A002E', position:'sticky', top: 0,zIndex:10, height:40  })} >
    <Link to="/">Cuna Mutual</Link>
  </header>
);

export default NavBar;