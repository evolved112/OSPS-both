const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./accountModel');
const PaymentMethod = require('./paymentMethodModel');
const Invoice = require('./invoiceModel');

const Payment = sequelize.define('Payment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentMethodId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  invoiceId: {
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
Payment.belongsTo(Account, { foreignKey: 'accountId' });
Payment.belongsTo(PaymentMethod, { foreignKey: 'paymentMethodId' });
Payment.belongsTo(Invoice, { foreignKey: 'invoiceId' });

module.exports = Payment;
