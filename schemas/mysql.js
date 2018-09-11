import mysql from "mysql2/promise";

const connection = async () => {
    return await mysql.createConnection({
        host: process.env.dbHost,
        user: process.env.dbUser,
        password: process.env.dbPwd,
        database: process.env.dbName
    });
}

export default connection;
