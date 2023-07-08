
import { Router } from 'express';
import * as pageController from '../constollers/pageController'
import * as searchController from '../constollers/searchController';


const router = Router();

router.get ('/', pageController.home);
router.get ('/dogs', pageController.dogs);
router.get ('/cats', pageController.cats);
router.get ('/fishs', pageController.fishs);

router.get ('/search', searchController.search);

export default router;