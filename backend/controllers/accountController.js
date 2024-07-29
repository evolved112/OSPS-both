const AccountService = require('../services/accountService');

class AccountController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AccountService.register(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await AccountService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Additional methods (getAccount, updateAccount, deleteAccount)...
}

module.exports = new AccountController();
