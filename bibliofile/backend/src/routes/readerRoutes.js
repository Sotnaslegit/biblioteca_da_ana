import { Router } from 'express';
import {
    createReader,
    listReader,
    listReaderById,
    deleteReader,
    updateReader
} from "../controller/readerController.js";

const readerRouter = Router();

readerRouter.post("/readers", createReader);

readerRouter.get("/readers", listReader);

readerRouter.get("/readers/:id", listReaderById);

readerRouter.delete("/readers/:id", deleteReader);

readerRouter.put("/readers/:id", updateReader);

export default readerRouter;