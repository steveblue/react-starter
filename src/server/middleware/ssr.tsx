import React from 'react';
import ReactDOM from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { printDrainHydrateMarks } from 'react-imported-component';

import App from '../../client/app/App';
import generateHtml from './client';

export default (req, res) => {
  // generate the server-side rendered HTML using the appropriate router
  const context = {
    url: null
  };
  const helmetContext = {};
  const router = (<HelmetProvider context={helmetContext}>
                    <StaticRouter location={req.originalUrl} context={context}>
                      <App />
                    </StaticRouter>
                  </HelmetProvider>);
  const markup = ReactDOM.renderToString(router);

  // if react-router is redirecting
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // format HTML and send the result
    const html = generateHtml(markup + printDrainHydrateMarks());
    res.send(html);
  }
};