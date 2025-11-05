import { db } from "../config/db.js";

export const createDiscuss = async(req, res) => {
    try {
        const { body } = req;
        const [results] = await db.query(
            'INSERT INTO discuss (commentary, reader_id, book_id) VALUES (?, ?, ?)', [body.commentary, body.reader_id, body.book_id]
        );
        const [discussCreated] = await db.query(
            'SELECT * FROM discuss WHERE id = ?',
            results.insertID
        );
        res.status(200).json(discussCreated)
    } catch (error) {
        console.log(error)
    }
}

export const listDiscuss = async (req, res) => {
    try {
        const [results] = await db.query(
            'SELECT * FROM discuss'
        );
        res.status(200).json(results);
    } catch (error) {
        console.log(error)
    }
};

export const listDiscussById = async (req, res) => {
    try {
        const { id } = req.params
        const [results] = await db.query(
            'SELECT * FROM discuss WHERE id_discuss = ?', id
        );
        res.status(200).send(results);
    } catch (error) {
        console.log(error);
    };
};

export const deleteDiscuss = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await db.query(
            "DELETE FROM discuss WHERE id=?",
            id
        );
        res.status(200).send("Deleted discuss!", results);
    } catch (error) {
        console.log(error)
    }
}