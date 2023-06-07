import Cart from '../models/cart';
import Joi from 'joi';

const CartSchema = Joi.object({
    user_id: Joi.string().required(),
    products: Joi.array().required(),
    quantity: Joi.number().required()
})

export const getAll = async (req, res) => {
    try {
        const data = await Cart.find()
        res.send({
            message: "Get Cart successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Cart.findById(id)
        res.send({
            message: "Get cart successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
export const create = async (req, res) => {
    try {
        const body = req.body
        const { error } = CartSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Cart.create(body)
            res.send({
                message: "Create cart successfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = CartSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Cart.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update cart successfully",
                    data: data
                })
            } else {
                res.status(400).send({
                    message: "Cart is not existed",
                    data: data
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const remove = async (req, res)=>{
    try {
        const id = req.params.id
        const data = await Cart.findByIdAndRemove(id)
        if(data){
            res.send({
                message: "Delete Cart successfully"
            })
        }else{
            res.status(400).send({
                message: "Product is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}