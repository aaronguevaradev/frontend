
import React from "react";
import { css } from '@emotion/css'
import Container from "@material-ui/core/Container";

const Footer = () => (
  <footer className={css({ background: '#8A002E', position:'sticky', bogttom: 0, height:50  })} >
      <Container maxWidth="sm"><div>Copyright @ 2021</div></Container>
    
  </footer>
);

export default Footer;