import Product from "../models/product";
import Joi from "joi";

const Size = Joi.object({
    _id: Joi.string(),
    name: Joi.string().required(),
    description: Joi.string(),
    __v: Joi.number()
})

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    origin_price: Joi.number(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    size: Joi.array().items(Size),
    category_id: Joi.string().required(),
    brand: Joi.string().required(),
    quantity: Joi.number().required(),
    status: Joi.boolean()
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
export const getPro_Name = async function (req, res) {
    try {
        const keyword = req.body.name; // Lấy từ khóa tìm kiếm từ request body
        console.log(keyword);

        // Tìm sản phẩm với tên gần giống từ khóa tìm kiếm
        const data = await Product.find({ name: { $regex: keyword, $options: 'i' } });

        if (data.length === 0) {
            // Không tìm thấy sản phẩm
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }

        // Trả về danh sách sản phẩm
        return res.json(data);
    } catch (error) {
        // Xử lý lỗi
        return res.status(500).json({ message: error.message });
    }
};
