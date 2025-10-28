// karma.conf.js
const path = require("path");

module.exports = function(config) {
  config.set({
    // Base path que se usa para resolver patrones de archivos
    basePath: "",
    
    // Frameworks de test
    frameworks: ["jasmine"],

    // Archivos a cargar en el navegador
    files: [
      "src/**/*.spec.js",   // Todos tus tests
      "src/**/*.js"         // Tu código fuente (opcional si importas en los tests)
    ],

    // Archivos a excluir
    exclude: [],

    // Preprocesadores (webpack + sourcemaps)
    preprocessors: {
      "src/**/*.js": ["webpack", "sourcemap"],
      "src/**/*.spec.js": ["webpack", "sourcemap"]
    },

    webpack: {
      mode: "development",
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
      resolve: {
        extensions: [".js"]
      },
      devtool: "inline-source-map"
    },

    webpackMiddleware: {
      stats: "errors-only"
    },

    // Reporteros
    reporters: ["progress"],

    // Puerto de Karma
    port: 9876,

    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // Navegadores
    browsers: ["Chrome"], // o 'ChromeHeadless'

    singleRun: false,
    concurrency: Infinity
  });
};
