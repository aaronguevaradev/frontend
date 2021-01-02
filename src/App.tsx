import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoanApplication from "./comps/LoanApplication";
import AppDenied from "./comps/AppDenied"
import { Router, Link } from "@reach/router"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
        <LoanApplication path="/"/>
        <AppDenied path="/appdenied"/>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
