const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Report = sequelize.define('Report', {
  reportType: {
    type: DataTypes.STRING, // e.g., 'usage', 'financial'
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  generatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  timestamps: true
});

module.exports = Report;
