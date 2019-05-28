/*
* Created by Steven Lee
* Date: 2019/5/26
* Time: 12:16
* Project: webpack-base
* */

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
console.log(__dirname)

// webpack 默认只能打包处理js后缀名文件。其他文件需配置第三方loader

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成内存中首页名称
})

module.exports = {
  mode: 'development',
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 扩展名标识，这几类文件的扩展名可以省略不写（与顺序有关，依次去寻找文件）
    alias: { // 别名
      '@': path.join(__dirname, './src')
    }
  }
}



