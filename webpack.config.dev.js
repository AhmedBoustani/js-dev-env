import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,  // sends debugging info when runnign the build
  devtool: 'inline-source-map',
  noInfo: false,  // To remove the noise in the commandline
  entry: [
    path.resolve(__dirname, 'src/index')  // Application entry point
  ],
  target: 'web',  // could be node, electron....
  // webpack won't generate any physical files for the development build
  // it will create a bundle on memory and serve the build to the browser
  output: {
    path: path.resolve(__dirname, 'src'),  // where the app will start from
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    // The file types webpack should handle
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
