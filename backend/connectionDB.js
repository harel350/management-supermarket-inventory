const { Sequelize } = require('sequelize')
const dbData = require('./dbData')

const DB_NAME = dbData.DB_NAME;
const DB_USER = dbData.DB_USER;
const DB_PASS = dbData.DB_PASS;

config = {
  host: "localhost",
  port: "5432",
  dialect: 'postgres'

}

// 1) Using a configuration object:
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, config);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:\n', error.message);
  }
}


