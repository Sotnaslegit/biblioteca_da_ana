import { db } from "../config/db";

export const createBook = async (req, res) => {
    try {
        const { body } = req;
        const [results] = db.query(
            'INSERT INTO book (title, author, category, pagines, read_time, note, review) VALUES (?, ?, ?, ?, ?, ?, ?)', [body.title, body.author, body.category, body.pagines, body.read_time, body.note, body.review]
        );
        const [bookCreated] = await db.query(
            "SELECT * FROM book WHERE id=?",
            results.insertId
        );
        res.status(201).json(bookCreated);
    } catch (error) {
        console.log(error);
    };
};

export const listBook = async (req, res) => {
    try {
        const [results] = db.query(
            'SELECT * FROM book'
        );
        res.status(200).json(results)
    } catch (error) {
        console.log(error)
    }
};

export const listBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = db.query(
            'SELECT * FROM book WHERE id_book = ?', id
        );
        res.status(200).json(results);
    } catch (error) {
        console.log(error)
    }
};

export const deleteBook = async (req, res) => {
    try {
       const { id } = req.params;
       const [results] = db.query(
        'DELETE FROM book WHERE id = ?', id
       );
       res.status(200).send("Livro deletado!", results);
    } catch (error) {
        console.log(error)
    };
};