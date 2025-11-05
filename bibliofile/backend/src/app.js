import express from "express";
import readerRouter from "./routes/readerRoutes.js";
import bookRouter from "./routes/bookRoutes.js";
import discussRouter from "./routes/discussRoutes.js";
import recommendRouter from "./routes/recommendRoutes.js";
import corsMiddleware from "./middleware/cors.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(corsMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(readerRouter);
app.use(bookRouter);
app.use(discussRouter);
app.use(recommendRouter);

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`);
});