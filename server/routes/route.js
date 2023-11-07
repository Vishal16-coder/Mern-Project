import express from 'express';

import { singupUser,loginUser } from '../controller/user-controller.js';
import {postReview,} from '../controller/review-controller.js';
import { getAllUserData } from '../controller/post-controller.js';

const router = express.Router();
router.post('/signup', singupUser);
router.post('/login', loginUser);
router.post('/post-review', postReview);
export default router;