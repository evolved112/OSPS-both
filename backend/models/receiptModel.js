const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Booking = require('./bookingModel');
const Payment = require('./paymentModel');
const Customer = require('./customerModel');

const Receipt = sequelize.define('Receipt', {
  details: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
Receipt.belongsTo(Booking, { foreignKey: 'bookingId' });
Receipt.belongsTo(Payment, { foreignKey: 'paymentId' });
Receipt.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Receipt;
