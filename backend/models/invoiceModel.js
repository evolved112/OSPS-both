const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Booking = require('./bookingModel');

const Invoice = sequelize.define('Invoice', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
Invoice.belongsTo(Booking, { foreignKey: 'bookingId' });

module.exports = Invoice;
