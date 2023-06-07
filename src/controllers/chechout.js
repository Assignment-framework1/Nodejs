import Checkout from "../models/checkout"
import Joi from "joi"

const checkoutScheme = Joi.object({
    user_id: Joi.string().required(),
    card_id: Joi.string().required(),
    total: Joi.number().required(),
    address: Joi.string().required(),
    status: Joi.string()
})

export const getAll = async (req, res)=>{
    try {
        const data = await Checkout.find()
        res.send({
            message: "Get checkout successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getById = async(req, res)=>{
    try {
        const id = req.params.id
        const data = await Checkout.findById(id)
        res.send({
            message: "Get checkout successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message:error
        })
    }
}

export const create = async (req, res) =>{
    try {
        const body = req.body
        const {error} = checkoutScheme.validate(body)
        if(error){
            res.status(400).send({
                message: error.message
            })
        }else{
            const data = await Checkout.create(body)
            res.send({
                message: "Get checkout successfully",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}


export const update = async(req, res)=>{
    try {
        const id = req.params.id
        const body = res.body
        const {error} = checkoutScheme.validate(body)
        if(error){
            res.status(500).send({
                message: error.message
            })
        }else{
            const data = await Checkout.findByIdAndUpdate(id, body)
            if(data){
                res.send({
                    message: "Update checkout successfully",
                    data: data
                })
            }else {
                res.status(400).send({
                    message: "Checkout is not existed",
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
        const data = await Checkout.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Detele checkout successfully"
            })
        } else {
            res.status(400).send({
                message: "Checkout is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}