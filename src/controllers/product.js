import Product from "../models/product";
import Joi from "joi";

const size_id = Joi.string().required()

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    origin_price: Joi.number(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    size: Joi.array().items(size_id),
    category_id: Joi.string().required(),
    brand: Joi.string().required(),
    quantity: Joi.number().required(),
    status: Joi.string()
})

export const getAll = async (req, res) => {
    try {
        const data = await Product.find()
        res.send({
            message: "Get products successfully",
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
        const data = await Product.findById(id)
        res.send({
            message: "Get product successfully",
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
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Product.create(body)
            res.send({
                message: "Create product successfully",
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
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Product.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update product successfully",
                    data: data
                })
            } else {
                res.status(400).send({
                    message: "Product is not existed",
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

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Detele product successfully"
            })
        } else {
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