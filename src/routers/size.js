import express from 'express'
import { getAll, getById, create, update, remove } from '../controllers/size'

const sizeRouter = express.Router()

sizeRouter.get('', getAll)
sizeRouter.get('/:id', getById)
sizeRouter.post('', create)
sizeRouter.put('/:id', update)
sizeRouter.delete('/:id', remove)

export default sizeRouter
