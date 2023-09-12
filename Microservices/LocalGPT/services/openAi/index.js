const express = require('express');
require('dotenv').config();

const aiController = require('./controllers/openAiController')
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.post('/complete', authMiddleware, aiController.complete);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});