const Account = require('../models/account');
const bcrypt = require('bcrypt');

//currently using bcrypt follow the template, will change accordingly

class AccountController {
  async register(req, res) {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const account = await Account.create({ email, password: hashedPassword });
      res.status(201).json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const account = await Account.findOne({ where: { email } });
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, account.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      res.status(200).json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAccount(req, res) {
    try {
      const account = await Account.findByPk(req.params.id);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      res.status(200).json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateAccount(req, res) {
    try {
      const { email, password } = req.body;
      const account = await Account.findByPk(req.params.id);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      account.email = email || account.email;
      if (password) {
        account.password = await bcrypt.hash(password, 10);
      }
      await account.save();
      res.status(200).json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteAccount(req, res) {
    try {
      const account = await Account.findByPk(req.params.id);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      await account.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AccountController();
