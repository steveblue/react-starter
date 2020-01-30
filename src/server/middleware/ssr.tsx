import React from "react";
import ReactDOM from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { printDrainHydrateMarks } from "react-imported-component";
import { StaticRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { i18nConfig } from "./../intl/index";
import App from "../../client/app/App";
import generateHtml from "./client";

interface IRouterContext {
  url?: null | string;
}

export default (req, res) => {
  // generate the server-side rendered HTML using the appropriate router
  const context: IRouterContext = {
    url: null
  };
  let locale: string = req.acceptsLanguages()[0];
  if (locale.includes("-")) {
    locale = locale.split("-")[0];
  }
  if (locale.includes("_")) {
    locale = locale.split("_")[0];
  }
  const i18n = i18nConfig[locale] || i18nConfig.en;
  const helmetContext = {};
  const router = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.originalUrl} context={context}>
        <IntlProvider
          locale={i18n.locale}
          defaultLocale={i18n.locale}
          messages={i18n.messages}
        >
          <App />
        </IntlProvider>
      </StaticRouter>
    </HelmetProvider>
  );
  const markup: string = ReactDOM.renderToString(router);

  // if redirect
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // format HTML
    const html: string = generateHtml(markup + printDrainHydrateMarks());
    res.send(html);
  }
};
