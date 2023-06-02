import express from 'express'
import { getAll, getById, create, update, remove } from '../controllers/size'

const sizeRouter = express.Router()

sizeRouter.get('/size', getAll)
sizeRouter.get('/size/:id', getById)
sizeRouter.post('/size', create)
sizeRouter.put('/size/:id', update)
sizeRouter.delete('/size/:id', remove)

export default sizeRouter
