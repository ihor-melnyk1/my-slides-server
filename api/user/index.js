import express from 'express';

import signUp from './controllers/signUp';
import userAuthentication from '../../middlewares/userAuthentication';
import getProfile from './controllers/getProfile';
import login from './controllers/login';

const router = express.Router();

router.route('/signup').post(signUp);
router.route('/login').post(login);

router.use(userAuthentication);

router.route('/profile').get(getProfile);

export default router;
