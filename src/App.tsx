import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoanApplication from "./comps/LoanApplication";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <LoanApplication userLoggedIn={false} />
      </Container>
    </React.Fragment>
  );
}

export default App;
