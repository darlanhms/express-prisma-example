import { Router } from 'express';

import createAuthor from '../controllers/author/createAuthor';
import getAuthor from '../controllers/author/getAuthor';
import getAuthors from '../controllers/author/getAuthors';
import getAuthorWithBooks from '../controllers/author/getAuthorWithBooks';

const authorsRouter = Router();

authorsRouter.post('/', async (req, res) => {
    try {
        const author = await createAuthor(req.body);

        return res.json(author);
    } catch (error: any) {
        return res.json({ messae: error.message }).status(500);
    }
});

authorsRouter.get('/', async (req, res) => {
    return res.json(await getAuthors());
});

authorsRouter.get('/:id', async (req, res) => {
    return res.json(await getAuthor(req.params.id));
});

authorsRouter.get('/:id/books', async (req, res) => {
    return res.json(await getAuthorWithBooks(req.params.id));
});

export default authorsRouter;
