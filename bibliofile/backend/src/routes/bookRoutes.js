import { Router } from 'express';
import {
    createBook,
    listBook,
    listBookById,
    deleteBook
} from "../controller/bookControler.js";

const bookRouter = Router()

bookRouter.post("/book", createBook);

bookRouter.get("/book", listBook);

bookRouter.get("/book/:id", listBookById);

bookRouter.delete("/book/:id", deleteBook);

export default bookRouter;