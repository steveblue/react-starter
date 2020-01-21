# React Starter

Example of how to setup a React project with Parcel.

- ⚛  React
- ✅ TypeScript
- ☄️  Server Side Rendering
- ⚡️  Hot Module Replacement
- ⛱ Lazyloading
- 🧪 Unit Tests
- 📖 Storybook
- 🏝 PostCSS


### Really, Another React Starter In 2020?

Parcel is faster than Webpack and there's zero configuration to maintain. If I'm getting started with React in 2020 I want to be able to leverage and speed and agility of Parcel. Sure, I could have used Next.js or any of the other Webpack based starter code, but then I would have never learned how all the bits and pieces work together and I would be at the mercy of those open source projects to fix things.

After spending years with Angular CLI I can't say I'm a big fan of starter code projects. Having distributed my last starter code in 2015, I find CLI tools make it way easier to bootstrap applications. Who knows, maybe this is the beginning of a CLI tool that scaffolds this starter code.

### Commands

This project uses `yarn` so if you haven't already run `npm i -g yarn` to install globally. You could fallback to `node` if necessary.

| Command       | Description                                 |
| ------------- |:-------------------------------------------:|
| `yarn dev`     | Start development server w/ HMR, livereload |
| `yarn prod`     | Build project for production      |
| `yarn serve`     | Start node server     |
| `yarn lint`     | Lint source code with TSLint  |
| `yarn test`     | Test source code with Jest / Enzyme    |
| `yarn storybook` | Start storybook development server    |


The development / production server runs on port 3200 by default.


## ROADMAP

- cli for generating starter code
- i18n support