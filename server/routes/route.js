import express from 'express';

import { loginUser, singupUser, logoutUser } from '../controller/user-controller.js';

const router = express.Router();
router.post('/signup', singupUser);
export default router;