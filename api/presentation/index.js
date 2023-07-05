import express from 'express';

import createPresentation from './controllers/createPresentation';
import getPublicPresentations from './controllers/getPublicPresentations';
import editPresentation from './controllers/editPresentation';
import getUserPresentations from './controllers/getUserPresentations';

import userAuthentication from '../../middlewares/userAuthentication';
import likePresentation from './controllers/likePresentation';

const router = express.Router();

router.route('/public').get(getPublicPresentations);

router.use(userAuthentication);

router.route('/').get(getUserPresentations).post(createPresentation);
router.route('/:id').put(editPresentation);
router.route('/like').post(likePresentation);

export default router;
