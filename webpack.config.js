const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  // откуда брать файлы
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
  },
  // как и куда сохранять итоговые файлы
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // избавление от относительных путей
  resolve: {
    alias: {
      DataFetch: path.resolve(__dirname, "src/data-fetch/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
      Components: path.resolve(__dirname, "src/components/"),
    },
  },
  // для автоматической перезагрузки страницы после внесения изменений
  devServer: {
    watchFiles: [path.resolve(__dirname, "./src/*.html")],
    hot: true,
  },
  // как работать с различными файлами
  module: {
    rules: [
      // транспиляция текущих версий JS в предыдущие для совместимости
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // parse CSS and add vendor prefixes to CSS rules
          "sass-loader", // compiles Sass to CSS, using Node Sass by default. Node Sass needed additionally
        ],
      },
    ],
  },
  // подключение плагинов
  plugins: [
    // для работы с HTML
    new HtmlWebpackPlugin({
      title: "Webpack Output",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),

    // для очистки итоговой папки от неиспользуемых файлов после каждой сборки
    new CleanWebpackPlugin(),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
