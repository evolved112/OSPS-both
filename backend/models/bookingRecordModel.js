const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./accountModel');
const ParkingSlot = require('./parkingSlotModel');

const BookingRecord = sequelize.define('BookingRecord', {
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slotId: {
    type: DataTypes.INTEGER,
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
BookingRecord.belongsTo(Account, { foreignKey: 'accountId' });
BookingRecord.belongsTo(ParkingSlot, { foreignKey: 'slotId' });

module.exports = BookingRecord;
