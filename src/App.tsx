import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import LoanApplication from '../src/comps/LoanApplication';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Typography component="div" style={{height: '100vh' }} /> */}
        <LoanApplication userLoggedIn={false}></LoanApplication>
      </Container>
    </React.Fragment>
  );
}

export default App;
