// 必要プラグインの読み込み (var gulp = ~ でも可)
const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackConfig = require("../webpack.config");

gulp.task("default", () => {
  console.log('default');
  // ☆ webpackStreamの第2引数にwebpackを渡す☆
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist"));
});
