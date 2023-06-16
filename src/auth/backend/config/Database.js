import { Sequelize } from "sequelize";

const db = new Sequelize(
    'db-auth',
    'root',
    '',{
        host: 'localhost',
        dialect: 'mysql'
    }
);

export default db;
