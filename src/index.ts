import express, {Router} from 'express';
import {PORT} from './config/config';
import {errorHandler} from './middlewares/errorMiddleware';
import userRouter from './features/users/users.router';

const app = express();
app.use(express.json());

const apiRouter = Router();
app.use('/api', apiRouter);

apiRouter.get('/', (req, res) => {
  res.status(201).send('Hello, world!');
});

apiRouter.use('/users', userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;