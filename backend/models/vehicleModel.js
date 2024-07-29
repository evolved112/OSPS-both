const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberPlate: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  VIN: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parkedLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  timestamps: true
});

module.exports = Vehicle;
