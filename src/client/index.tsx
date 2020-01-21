import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { rehydrateMarks } from "react-imported-component";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import importedComponents from "./imports";

const element = document.getElementById("root");
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
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
