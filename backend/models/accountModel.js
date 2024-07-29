const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Vehicle = require('./vehicleModel');

const Account = sequelize.define('Account', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerType: {
    type: DataTypes.STRING, // e.g., 'admin', 'customer'
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
Account.hasMany(Vehicle, { foreignKey: 'accountId' });
Vehicle.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = Account;
