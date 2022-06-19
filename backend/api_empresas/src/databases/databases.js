import mysql from 'promise-mysql';

import config from '../config';

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db
});

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}