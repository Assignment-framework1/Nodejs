import express from 'express'
import { getAll, getById, create, update, remove } from '../controllers/product'
const productRouter = express.Router()

productRouter.get('', getAll)
productRouter.get('/:id', getById)
productRouter.post('', create)
productRouter.put('/:id', update)
productRouter.delete('/:id', remove)

export default productRouter
