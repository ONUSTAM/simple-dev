// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackConfig = require("../webpack.config");
const webpackConfigDev = require("../webpack.config.dev");


// 開発用: $ gulp
gulp.task("default", () => {
  console.log('DEV');
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  return webpackStream(webpackConfigDev, webpack)
    .pipe(gulp.dest("dist"));
});

// リリース: $ gulp prod
gulp.task("prod", () => {
  console.log('PROD');
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("public"));
});
