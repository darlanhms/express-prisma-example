import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json(`server on - ${new Date()}`);
});

app.use('/api', router);

export default app;
