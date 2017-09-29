import express from 'express';

import AuthController from '../controllers/auth';

const router = express.Router();

router.post('/signup', AuthController.signUp);

export default router;
