const express = require('express');
const cors = require('cors');

const authController = require('./controllers/authController');
const migrationRunner = require('./database/migrationRunner')
const errorMiddleware = require('./middlewares/errorMiddleware');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(errorMiddleware);

app.use(cors());

// Endpoints are not correct
app.post('/auth/register', authController.signup);
app.post('/auth/login', authController.login);
app.post('/auth/verify', authController.verify)

// Run migrations
migrationRunner.runMigrations();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});