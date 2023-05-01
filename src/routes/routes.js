import { Router } from 'express';
import smsController from '../controllers/smsController.js';

const router = Router();

router.post('/', smsController.createSms)

export default router;