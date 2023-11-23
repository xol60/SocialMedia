import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import multer from 'multer';
import AuthRouter from './routes/AuthRouter.js'
import UserRouter from './routes/UserRouter.js'
import PostRouter from './routes/PostRouter.js'
import cors from 'cors'
const app = express();
// const upload = multer();
// app.use(upload.array());
dotenv.config()
app.use(cors())
// Middleware
app.use(express.json())
app.use(express.urlencoded())

mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log(`Listening at ${process.env.PORT}`)
        )
    )
    .catch((error) => console.log(error));
app.use('/api/auth', AuthRouter)
app.use('/api/user', UserRouter)
app.use('/api/post', PostRouter)
