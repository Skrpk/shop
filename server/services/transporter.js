import nodemailer from 'nodemailer';

import config from '../config';

export default nodemailer.createTransport({
  service: config.emailService,
  auth: {
    user: 'vitaliy.skripka23@gmail.com',
    pass: 'password',
  }
});
