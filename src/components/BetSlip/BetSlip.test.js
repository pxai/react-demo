import React from 'react';
import ReactDOM from 'react-dom';
import BetSlip from './BetSlip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BetSlip />, div);
  ReactDOM.unmountComponentAtNode(div);
});
