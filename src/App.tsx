import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoanApplication from "./comps/LoanApplication";
import AppDenied from "./comps/AppDenied";
import NewAccountPage from "./comps/NewAccountPage";
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Router, Link } from "@reach/router";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <LoanApplication path="/" />
          <AppDenied path="/appdenied" />
          <NewAccountPage path="/newaccount" />
        </Router>
      </Container>
      <Footer/>
      </React.Fragment>
  );
}

export default App;
