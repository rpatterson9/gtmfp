import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppContainer from './containers/AppContainer.js'
// import TimeContainer from './containers/TimeContainer.js'
// import ColorBlock from './components/ColorBlock.js'
// import Button from './components/Button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* <div className='time-block-wrapper'>
          <TimeContainer/>
          <ColorBlock/>
        </div>
        <Button/> */}

        <AppContainer/>
      </div>
    );
  }
}

export default App;
