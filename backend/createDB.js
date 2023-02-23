const { Pool } = require('pg');
const dbData = require('./dbData')

function createDb() {
  const client = new Pool({
    user: dbData.DB_USER,
    password: dbData.DB_PASS,
    host: "localhost",
    database: "postgres",
  });

  client.connect();

  client.query(`CREATE DATABASE "${dbData.DB_NAME}"`, (err, res) => {
    if (err) {
      console.error(err.message)
    }
    else {
      console.log('The DB was created successfully')
    }
    client.end();
  });
}
module.exports = createDb
