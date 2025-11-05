import { Router } from 'express';
import {
    createRecommend,
    listRecommend,
    deleteRecommend
} from "../controller/recommendController.js";

const recommendRouter = Router();

recommendRouter.post("/recommend", createRecommend);

recommendRouter.get("/recommend", listRecommend);

recommendRouter.delete("/recommend", deleteRecommend);

export default recommendRouter;