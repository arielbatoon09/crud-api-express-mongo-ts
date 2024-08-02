import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Routes';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
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

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});