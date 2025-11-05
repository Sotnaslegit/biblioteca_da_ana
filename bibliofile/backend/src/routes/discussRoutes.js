import { Router } from 'express';
import {
    createDiscuss,
    listDiscuss,
    listDiscussById,
    deleteDiscuss
} from "../controller/discussController.js";

const discussRouter = Router();

discussRouter.post("/discuss", createDiscuss);

discussRouter.get("/discuss", listDiscuss);

discussRouter.get("/discuss/:id", listDiscussById);

discussRouter.delete("/discuss/:id", deleteDiscuss);

export default discussRouter;