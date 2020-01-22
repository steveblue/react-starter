# React Starter

Example of how to setup a React project with Parcel.

- ⚛ React
- ✅ TypeScript
- ☄️ Server Side Rendering
- ⚡️ Hot Module Replacement
- ⛱ Lazyloading
- 🧪 Unit Tests
- 📖 Storybook
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

### Really, Another React Starter In 2020?

Parcel is faster than Webpack and has zero configuration to maintain. If I'm getting started with React in 2020 I want to be able to leverage and speed and agility of Parcel. Sure, I could have used Next.js or any of the other Webpack based starter code, but then I would have never learned how all the bits and pieces work together.

After spending years with Angular CLI I can't say I'm a big fan of starter code projects. Having distributed my last starter code in 2015, I find CLI tools make it way easier to bootstrap applications. Who knows? Maybe this is the beginning of a CLI that scaffolds this starter code.

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
