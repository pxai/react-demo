import React, { Component } from 'react';
import '../../App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Cards from './Cards/Cards';

class GamePanel extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default GamePanel;
