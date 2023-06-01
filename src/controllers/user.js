import Joi from "joi"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Users from "../models/user"

const salt = bcrypt.genSaltSync(10)

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().required().valid(Joi.ref('password'))
})

export const signup = async (req, res) => {
    try {
        const body = req.body
        const { error } = userSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.details[0].message
            })
        } else {
            const hash = bcrypt.hashSync(body.password, salt)
            const data = await Users.create({ ...body, password: hash })
            res.send({
                message: "Đăng ký thành công",
                data: data
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

const userSigninSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export const signin = async (req, res) => {
    try {
        const body = req.body
        const { error } = userSigninSchema.validate(body)

        // Validate
        if (error) {
            return res.status(400).send({
                message: error.details[0].message
            })
            // res.end()
        }
        const user = await Users.findOne({ email: body.email })
        if (!user) {
            return res.status(400).send({
                message: "Tài Khoản không tồn tại"
            })
        }
        const isValidate = bcrypt.compareSync(body.password, user.password)
        if (!isValidate) {
            return res.status(400).send({
                message: "Tên đăng nhập hoặc mật khẩu sai"
            })
        }
        const accessToken = jwt.sign({ _id: user.id }, "assignment2", { expiresIn: "5m" })
        res.send({
            message: `Đăng nhập thành công`,
            data: {
                user, accessToken
            },
        })

    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
