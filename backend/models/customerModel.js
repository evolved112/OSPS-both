const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const People = require('./peopleModel');
const Vehicle = require('./vehicleModel');
const Payment = require('./paymentModel');

const Customer = sequelize.define('Customer', {
  accountBalance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  preferredPaymentMethod: {
    type: DataTypes.STRING, // e.g., 'credit card', 'paypal'
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
Customer.belongsTo(People, { foreignKey: 'peopleId' });
Customer.hasMany(Vehicle, { foreignKey: 'customerId' });
Customer.hasMany(Payment, { foreignKey: 'customerId' });

module.exports = Customer;
