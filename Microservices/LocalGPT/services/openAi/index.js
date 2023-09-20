const express = require('express');
require('dotenv').config();
const cors = require('cors');

const aiController = require('./controllers/openAiController')
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


app.post('/complete', authMiddleware, aiController.complete);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});