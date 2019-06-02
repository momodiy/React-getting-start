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
      },
      {
        test: /\.css$/,
        // 添加`？modules` 启用模块化
        use: ['style-loader', 'css-loader'] // 解析顺序，从后向前依次解析，先'css-loader'，再'style-loader'
      },
      { // 打包处理字体文件中的loader
        test: /\.ttf|woff|woff2|eot|svg$/,
        use: 'url-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'],
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



