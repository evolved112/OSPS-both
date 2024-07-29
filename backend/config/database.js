const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('swe30003', 'admin', 'XQngPMG9Zius9zwD9Exn72iSXuy3bH', {
  host: 'asia-east1.184b8e94-a319-4264-b326-2fca35dc2fb4.gcp.ybdb.io',
  dialect: 'postgres',
  port: 5433,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
