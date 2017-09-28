import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import mongoose from 'mongoose';

import config from './config';
import webpackConfig from '../webpack.config.dev.js';

const app = express();

const compiler = webpack(webpackConfig);

mongoose.connect(config.db, {
  useMongoClient: true,
}).then((data) => {
  console.log(data);
}).catch(() => {
  console.log('2222222');
});

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(config.port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is listening on port ${config.port}`);
});
