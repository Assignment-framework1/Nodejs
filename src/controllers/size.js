import Size from "../models/size";
import Joi from "joi";

export const sizeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string()
})

export const getAll = async (req, res) => {
    try {
        const data = await Size.find()
        res.send({
            message: "Get sizes successfully",
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
        const data = await Size.findById(id)
        res.send({
            message: "Get size successfully",
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
        const { error } = sizeSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Size.create(body)
            res.send({
                message: "Create size successfully",
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
        const { error } = sizeSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await Size.findByIdAndUpdate(id, body)
            if (data) {
                res.send({
                    message: "Update size successfully",
                    data: data
                })
            } else {
                res.status(400).send({
                    message: "Size is not existed",
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
        const data = await Size.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Detele size successfully"
            })
        } else {
            res.status(400).send({
                message: "Size is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
