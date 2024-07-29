const Account = require('../models/accountModel');

class AccountService {
  async register(email, password) {
    // Hash password and save user
    const account = await Account.create({ email, password });
    return account;
  }

  async login(email, password) {
    // Authenticate user
    const account = await Account.findOne({ where: { email } });
    if (!account) throw new Error('User not found');
    // Validate password (add hashing and comparison logic)
    return account;
  }

  // Additional methods (getAccount, updateAccount, deleteAccount)...
}

module.exports = new AccountService();
