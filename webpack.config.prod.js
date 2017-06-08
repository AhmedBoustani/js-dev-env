import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,  // sends debugging info when runnign the build
  devtool: 'source-map',
  noInfo: false,  // To remove the noise in the commandline
  entry: [
    path.resolve(__dirname, 'src/index')  // Application entry point
  ],
  target: 'web',  // could be node, electron....
  // webpack won't generate any physical files for the development build
  // it will create a bundle on memory and serve the build to the browser
  output: {
    path: path.resolve(__dirname, 'dist'),  // where the app will start from
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    // The file types webpack should handle
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
