var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
  	rules:[
      {
      	 test: /\.css$/,  //载入css
         use: [
           'style-loader',
           'css-loader'
          ]
      },
       {
         test: /\.(png|svg|jpg|gif)$/, //载入图像
         use: [
           'file-loader'
         ]
       },
       {
        test: /\.(woff|woff2|eot|ttf|otf)$/, //加载字体
        use: [
           'file-loader'
         ]
       }
  	]
  },
  devtool: "cheap-eval-source-map",  //跟踪JavaScript错误异常 知识点在 source-map
  plugins: [
    //该插件自动生成 目标 html文件 
    new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: './favicon.ico'
    })
  ],
  
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    port: 9000
  }
};