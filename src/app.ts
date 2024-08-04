import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;
const MONGO_URL = process.env.MONGODB_URL as string;

mongoose
    .connect(MONGO_URL, {
        dbName: "mern-crud-app",
    })
    .then(() => {
        console.log("Database connected.");
    })
    .catch((error) => {
        console.error(`DB error: ${error.message}`);
    });

app.use("/", router);

// Error Logging
app.use((err: any, request: Request, response: Response, next: NextFunction) => {
    console.error(err.stack); 
    response.status(500).json({ response: 'error', message: err.message });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});