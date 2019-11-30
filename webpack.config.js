"use strict";

const path = require(`path`);

module.exports = {
  mode: `development`, // Режим сборки
  entry: `./src/main.js`, // Точка входа
  output: {
    filename: `bundle.js`, // Имя файла сборки
    path: path.join(__dirname, `public`) // Путь сборки
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    watchContentBase: true,
  }
};
