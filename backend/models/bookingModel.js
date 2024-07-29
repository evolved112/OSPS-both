const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ParkingSlot = require('./parkingSlotModel');

const Booking = sequelize.define('Booking', {
  bookingTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  parkingSlotId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
Booking.belongsTo(ParkingSlot, { foreignKey: 'parkingSlotId' });

module.exports = Booking;
