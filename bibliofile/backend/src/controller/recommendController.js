import { db } from "../config/db";

export const createRecommend = async (req, res) => {
    try {
        const { body } = req;
        const [results] = db.query(
            'INSERT INTO recommend (reader_id, book_id) VALUES (?, ?)', [body.reader_id, body.book_id] 
        );
        res.status(201).json("Like adicionado!", results);
    } catch (error) {
        console.log(error);
    };
};

export const listRecommend = async (req, res) => {
    try {
        const [results] = db.query(
            'SELECT * FROM recommend'
        );
        res.status(200).json(results);
    } catch (error) {
        console.log(error);
    };
};

export const deleteRecommend = async (req, res) => {
    try {
        const { body } = req;
        const [results] = await pool.query(
            'DELETE FROM recommend WHERE book_id = ? AND reader_id = ?', [body.book_id, body.reader_id]
        );
        res.status(200).send("Like removido!", results);
    } catch (error) {
        console.log(error);
    };
};