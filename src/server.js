import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import userRouter from './routers/user'
import categoryRouter from './routers/category'
import sizeRouter from './routers/size'
import productRouter from './routers/product'
const app = express()
const port = 8080

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/asm_fw1")
    .then(() => console.log("Connect to DB successfully"))

// Router
app.use(cors());
app.use('/users', userRouter);
app.use('/product', productRouter)
app.use('/size', sizeRouter)
app.use('/category', categoryRouter);

app.listen(port, () => {
    console.log(`Server đang chạy trên port ${port}`)
})


