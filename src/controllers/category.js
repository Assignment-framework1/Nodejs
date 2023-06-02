import Category from "../models/category"
import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
})

export const getAll = async (req, res) => {
    try {
        const data = await Category.find()
        res.send({
            message: "Get categories successfully",
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
        const data = await Category.findById(id)
        res.send({
            message: "Get category successfully",
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
        const { error } = categorySchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Category.create(body)
            res.send({
                message: "Create category successfully",
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
        const { error } = categorySchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Category.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update category successfully",
                    data: data
                })
            } else {
                res.status(400).send({
                    message: "Category is not existed",
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
        const data = await Category.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Detele category successfully"
            })
        } else {
            res.status(400).send({
                message: "Category is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
