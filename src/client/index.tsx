import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { rehydrateMarks } from "react-imported-component";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import App from "./app/App";
import { i18nConfig } from "./../server/intl/index";
import importedComponents from "./imports";
let locale = navigator.language;
if (locale.includes("-")) {
  locale = locale.split("-")[0];
}
if (locale.includes("_")) {
  locale = locale.split("_")[0];
}
const i18n = i18nConfig[locale] || i18nConfig.en;
const element = document.getElementById("root");

const app = (
  <HelmetProvider>
    <BrowserRouter>
      <IntlProvider
        locale={i18n.locale}
        defaultLocale={i18n.locale}
        messages={i18n.messages}
      >
        <App />
      </IntlProvider>
    </BrowserRouter>
  </HelmetProvider>
);

if (process.env.NODE_ENV === "production") {
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
