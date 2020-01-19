module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    env: {
      server: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["react-imported-component/babel", "babel-plugin-dynamic-import-node"]
      },
      client: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          ["react-imported-component/babel"]
        ]
      }
    }
}