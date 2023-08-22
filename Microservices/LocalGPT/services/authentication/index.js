const express = require('express');

const authController = require('./controllers/authController');
const migrationRunner = require('./database/migrationRunner')
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(errorMiddleware);

// Endpoints are not correct
app.post('/auth/register', authController.signup);
app.post('/auth/login', authController.login);

// Run migrations
migrationRunner.runMigrations();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});