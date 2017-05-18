const path = require('path');

var config = {
   entry: './main.js',
	
   output: {
      path: path.resolve(__dirname, './dist'), //relative path
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /(\.scss|\.css)$/, use: ['style-loader' ,'css-loader', 'sass-loader']}
      ]
   }
//    plugins : [
//    new webpack.optimize.UglifyJsPlugin(),
// ],

// devServer:{
//    //contentBase: './src',//not needed here
//    contentBase: '',
//    port :9000,
//    historyApiFallback:true, 
// },
}


module.exports = config;