import { Router } from 'express';
import createBook from '../controllers/book/createBook';
import getBooks from '../controllers/book/getBooks';

const booksRouter = Router();

booksRouter.post('/', async (req, res) => {
    try {
        return res.json(await createBook(req.body));
    } catch (error: any) {
        console.log(error);

        return res.json(error.message).status(500);
    }
});

booksRouter.get('/', async (req, res) => {
    return res.json(await getBooks());
});

export default booksRouter;
