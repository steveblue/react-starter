import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { rehydrateMarks } from 'react-imported-component';
import App from './app/app';

const element = document.getElementById('root')
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)

if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, element);
  });
} else {
  ReactDOM.render(app, element);
}

if (module.hot) {
  module.hot.accept();
}
