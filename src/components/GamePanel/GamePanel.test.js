import React from 'react';
import ReactDOM from 'react-dom';
import GamePanel from './GamePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GamePanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
