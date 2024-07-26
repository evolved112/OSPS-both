const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(express.json());

const string = "postgresql://admin:XQngPMG9Zius9zwD9Exn72iSXuy3bH@asia-east1.184b8e94-a319-4264-b326-2fca35dc2fb4.gcp.ybdb.io:5433/postgres?ssl=true&sslmode=verify-full&sslrootcert=./backend/root.crt";
const sequelize = new Sequelize(string);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
