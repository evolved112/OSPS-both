const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PaymentMethod = sequelize.define('PaymentMethod', {
  method: {
    type: DataTypes.STRING, // e.g., 'credit card', 'paypal'
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = PaymentMethod;
