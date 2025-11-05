import { db } from "../config/db.js";

export const createReader = async (req, res) => {
    try {
        const { body } = req;
        const [results] = await db.query(
            'INSERT INTO reader(reader_name, email, reader_password) VALUES(?, ?, ?)', [body.reader_name, body.email, body.reader_password]
        );
        const [readerCreated] = await db.query(
            "SELECT * FROM reader WHERE id=?",
            results.insertId
        );
        res.status(201).json(readerCreated);
    } catch (error) {
        console.log(error);
    };
};

export const listReader = async (req, res) => {
    try {
        const [results] = await db.query(
            'SELECT * FROM reader'
        );
        res.status(200).json(results);
    } catch (error) {
        console.log(error)
    }
};

export const listReaderById = async (req, res) => {
    try {
        const { id } = req.params
        const [results] = await db.query(
            'SELECT * FROM reader WHERE id_reader = ?', id
        );
        res.status(200).send(results);
    } catch (error) {
        console.log(error);
    };
};

export const updateReader = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const [results] = await db.query(
            "UPDATE reader SET `reader_name` = ?, `email` = ?, `reader_password` = ? WHERE id = ?; ",
            [body.reader_name, body.email, body.reader_password, id]
        );
        res.status(200).send("Updated reader!", results);
    } catch (error) {
        console.log(error)
    }
}

export const deleteReader = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await db.query(
            "DELETE FROM reader WHERE id=?",
            id
        );
        res.status(200).send("Deleted reader!", results);
    } catch (error) {
        console.log(error);
    };
};