import express from 'express'
import { create, getAll, getById, remove, update } from '../controllers/chechout'
const checkoutRouter = express.Router()

checkoutRouter.get('', getAll)
checkoutRouter.get('/:id', getById)
checkoutRouter.post('', create)
checkoutRouter.put('/:id', update)
checkoutRouter.delete('/:id', remove)

export default checkoutRouter
