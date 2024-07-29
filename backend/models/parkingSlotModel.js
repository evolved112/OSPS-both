const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const SlotType = require('./slotTypeModel');

const ParkingSlot = sequelize.define('ParkingSlot', {
  status: {
    type: DataTypes.STRING, // e.g., 'available', 'booked', 'in-use'
    allowNull: false,
  },
  slotTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true
});

// Relationships
ParkingSlot.belongsTo(SlotType, { foreignKey: 'slotTypeId' });

module.exports = ParkingSlot;
