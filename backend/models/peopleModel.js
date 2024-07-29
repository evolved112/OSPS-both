const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./accountModel');

const People = sequelize.define('People', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING, // e.g., 'admin', 'normal user'
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
People.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = People;
