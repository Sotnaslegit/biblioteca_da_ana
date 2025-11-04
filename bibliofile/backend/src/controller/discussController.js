import { db } from "../config/db";

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