import express from 'express';

import UserController from '../controllers/user';

const router = express.Router();

router.post('/exists', UserController.checkUserExists);

export default router;
