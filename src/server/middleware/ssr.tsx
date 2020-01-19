import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { printDrainHydrateMarks } from 'react-imported-component';
import through from 'through';
import App from '../../client/app/app';
import { getHTMLFragments } from './client';
// import { getDataFromTree } from 'react-apollo';
export default (request, res) => {
  const context = {};
  const helmetContext = {};
const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter
        location={request.originalUrl}
        context={context}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  try {
    // If you were using Apollo, you could fetch data with this
    // await getDataFromTree(app);
    const sheet = new ServerStyleSheet()
    const stream = sheet.interleaveWithNodeStream(
      renderToNodeStream(sheet.collectStyles(app))
    )
    if (context.url) {
      res.redirect(301, context.url);
    } else {
      const [
        startingHTMLFragment,
        endingHTMLFragment
      ] = getHTMLFragments({ drainHydrateMarks: printDrainHydrateMarks() })
      res.status(200)
      res.write(startingHTMLFragment)
      stream
        .pipe(
          through(
            function write(data) {
              this.queue(data)
            },
            function end() {
              this.queue(endingHTMLFragment)
              this.queue(null)
            }
          )
        )
        .pipe(res)
    }
  } catch (e) {
    console.error(e)
    res.status(500)
    res.end()
  }
};