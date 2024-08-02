import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Routes';

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;
const MONGO_URL = process.env.MONGODB_URL;

mongoose
    .connect(MONGO_URL as string, {
        dbName: "mern-crud-app",
    }).then(() => {
        console.log("Database connected.")
    }).catch((error) => {
        console.log(`DB error: ${error}`);
});

app.use("/", router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${port}`);
})