module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
    env: {
      server: {
        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        plugins: ["@babel/proposal-class-properties",
                  "@babel/proposal-object-rest-spread",
                  "react-imported-component/babel",
                  "babel-plugin-dynamic-import-node"]
      },
      client: {
        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        plugins: [
          [ "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            "react-imported-component/babel"]
        ]
      }
    }
}