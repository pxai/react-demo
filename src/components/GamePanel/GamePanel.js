import React, { Component } from 'react';
import '../../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class GamePanel extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            Game Panel
        <Footer />
      </div>
    );
  }
}

export default GamePanel;
