import mysql, { createConnection } from "mysql2"

export const db = await createConnection({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "bibliofile"
})