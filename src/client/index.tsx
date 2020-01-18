import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

declare var module: any;

const element = document.getElementById('root');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


if (process.env.NODE_ENV === 'production') {
    ReactDOM.render(app, element);
} else {
    ReactDOM.render(app, element);
}

if (module.hot) {
  module.hot.accept();
}