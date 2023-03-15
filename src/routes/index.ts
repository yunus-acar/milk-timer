import influencerRoute from './influencer.route';
import { Router } from 'express';

const router = Router();

router.use('/influencer', influencerRoute);


export default router;