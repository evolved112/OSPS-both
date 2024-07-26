const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Account extends Model {}
Account.init({
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'account' });

module.exports = Account;
