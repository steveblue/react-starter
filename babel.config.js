module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
    env: {
      server: {
        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        plugins: ["react-imported-component/babel",
                  "babel-plugin-dynamic-import-node"]
      },
      client: {
        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        plugins: [
          ["react-imported-component/babel"]
        ]
      }
    }
}