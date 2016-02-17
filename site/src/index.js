import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  ReactDOM.render(<App />, container);
});
