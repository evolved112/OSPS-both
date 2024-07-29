const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SlotType = sequelize.define('SlotType', {
  type: {
    type: DataTypes.STRING, // e.g., 'motorbike', 'car'
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = SlotType;
