import { Router } from 'express';
import authorsRouter from './authors';

const router = Router();

router.use('/authors', authorsRouter);

export default router;
