const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');
const accountRoutes = require('./routes/accountRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/accounts', accountRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected!');
    app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
