import { Router } from 'express';
import authorsRouter from './authors';
import booksRouter from './books';

const router = Router();

router.use('/authors', authorsRouter);
router.use('/books', booksRouter);

export default router;
