# React Starter

Example of how to setup a React project with Parcel.

- ⚛ React
- ✅ TypeScript
- ☄️ Server Side Rendering
- ⚡️ Hot Module Replacement
- ⛱ Lazyloading
- 🧪 Unit Tests
- 📖 Storybook
- 👄 SASS
- 🏝 PostCSS
- 💇‍♂️ Prettier
- 🌎 i18n

### Getting Started

This project uses `yarn` so run `npm i -g yarn` if you haven't already.

```
yarn install
yarn start
```

Visit [http://localhost:3200](http://localhost:3200) in your browser. The server is also configurable for HTTPS.

For a complete list of commands, look no further...

### Commands

| Command          |                 Description                 |
| ---------------- | :-----------------------------------------: |
| `yarn dev`       | Start development server w/ HMR, livereload |
| `yarn dev:ssr`   |       Start development server w/ SSR       |
| `yarn prod`      |        Build project for production         |
| `yarn serve`     |              Start node server              |
| `yarn lint`      |        Lint source code with TSLint         |
| `yarn test`      |     Test source code with Jest / Enzyme     |
| `yarn storybook` |     Start storybook development server      |

### ⚡️ Development Server

Run `yarn dev` to start up a development server with hot module replacement and livereload. This dev environment is client side only.

To develop with server-side rendering, run `yarn dev:ssr`.

### Production Server

`yarn prod` builds the application for production. To view the production build in browser, run `NODE_ENV=production node dist/server`. This configuration enables gzip compression and server-side rendering.

### SSL

To configure SSL, place `cert.pem` and `key.pem` files in `.config/ssl`.

Change the `serve` command to use https.

```
"serve": "PROTOCOL=HTTPS node dist/server"
```

Update the `dev` command so Parcel can reference the same files in the development server.

```
"dev": "NODE_ENV=development npm run generate-imported-components && parcel src/client/index.html --hmr-port 1235 --port 3200 --cert .config/ssl/cert.pem --key .config/ssl/key.pem"
```

### ✅ TypeScript

This project is configured to use TypeScript and TSX.

### ☄️ Server Side Rendering

`react-helmet` does all the heavy lifting. Express handles the requests, while a custom middleware server-side renders the view.

### ⛱Lazyloading

`react-imported-component` is used to handle lazyloading with React. This package was chosen because it is compatible with server-side rendering.

```
const Page = importComponent(() => import("./view/page/Page"), {
  ErrorComponent,
  LoadingComponent
});
```

### 🧪Unit Tests

`jest` and `enzyme` are configured to handle unit tests by default.

### 📖Storybook

The popular design system library is scaffolded and ready to go.

### 👄Styling

`node-sass` and `postcss` are configured by default for styling. Simply include a stylesheet in the `index.html` or any `.tsx` file.

```
<link rel="stylesheet" type="text/css" href="style/style.scss">
```

```
import "./root.scss";
```

### 💇‍♂️Prettier

Code is autoformatted with `prettier`, because nobodys got time for that. This project is linted with `tslint`.

### 🌎i18n

`react-intl` handles localization. The demo app features localized server-side rendered views.

### Really, Another React Starter In 2020?

Parcel is faster than Webpack and has zero configuration to maintain. If I'm getting started with React in 2020 I want to be able to leverage and speed and agility of Parcel. Sure, I could have used Next.js or any of the other Webpack based starter code, but then I would have never learned how all the bits and pieces work together.

After spending years with Angular CLI I can't say I'm a big fan of starter code projects. Having distributed my last starter code in 2015, I find CLI tools make it way easier to bootstrap applications. Who knows? Maybe this is the beginning of a CLI that scaffolds this starter code.
