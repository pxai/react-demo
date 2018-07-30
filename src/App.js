import React, { Component } from 'react';
import Header from './components/Header/Header';
import BetSlip from './components/BetSlip/BetSlip';
import GamePanel from './components/GamePanel/GamePanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BetSlip />
        <GamePanel />
      </div>
    );
  }
}

export default App;
