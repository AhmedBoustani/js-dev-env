import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NOD_ENV = 'production';
/* eslint-disable no-console */
console.log(chalk.blue('Generating minified bundle for production. this will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) { // Fatal error
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }
  // Success
  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.green('Your app has been built for production and written /dist !'));

  return 0;
});
