import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  add(panels) {
        alert('YAY')
  }

  render() {
    return (
      <div className="Header">
        <div className="title">Game Panel Header</div>
        <div className="controls">
            <button onClick={()=>this.add(1)}>+1</button>
        </div>
        <div className="controls">
            <button onClick={()=>this.add(10)}>+10</button>
        </div>
      </div>
    );
  }
}

export default Header;
