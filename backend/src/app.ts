import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes)


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});