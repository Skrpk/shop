import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import jwt from 'jsonwebtoken';

import config from './config';
import webpackConfig from '../webpack.config.babel.js';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import User from './models/user';

const app = express();

const compiler = webpack(webpackConfig);

mongoose.Promise = bluebird;
mongoose.connect(config.db, {
  useMongoClient: true,
}).then(() => {
  console.log('Connected to mongoDB');
}).catch((err) => {
  throw err;
});

app.use(bodyParser.json());

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/confirmation/:token', async (req, res) => {
  try {
    const { user: { email } } = jwt.verify(req.params.token, config.EMAIL_SECRET);
    await User.findOneAndUpdate({ email }, { confirmed: true });
    return res.redirect('/signin');
  } catch (e) {
    return res.send('ERROR');
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use('/api', authRoute);
app.use('/api/users', userRoute);

app.listen(config.port, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server is listening on port ${config.port}`);
});
