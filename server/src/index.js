import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import AuthRouter from './routes/AuthRouter.js'
import UserRouter from './routes/UserRouter.js'
import PostRouter from './routes/PostRouter.js'
const app = express();
dotenv.config()

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
console.log(process.env.MONGO_DB)
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