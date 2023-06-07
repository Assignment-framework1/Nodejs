import express from "express";
import { getAll,  getById, create, update, remove} from "../controllers/cart"

const cartRouter = express.Router();

cartRouter.get("", getAll);
cartRouter.get("/:id", getById); 
cartRouter.post("", create);
cartRouter.patch("/:id", update);
cartRouter.delete("/:id", remove);

export default cartRouter;
