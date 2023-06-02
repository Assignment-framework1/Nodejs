import express from "express";
import {getAll,getById,create,update,remove} from "../controllers/category"

const categoryRouter = express.Router();

categoryRouter.get("", getAll);
categoryRouter.get("/:id", getById);
categoryRouter.post("", create);
categoryRouter.patch("/:id", update);
categoryRouter.delete("/:id", remove);

export default categoryRouter;
