import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';
import { Mui } from './theme/mui';
import ButtonAppBar from './components/ButtonAppBar.js';
import MenuList from './components/MenuList.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Mui}>
        <div className="App">
          <div className="App-header">
            <ButtonAppBar />
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-content">
            <Button variant="raised" className="Button">
              My Button
            </Button>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
