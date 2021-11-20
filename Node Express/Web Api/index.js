const express = require('express');
const db = require('./app/models/index');
const router = require('./app/routes/user.routes');

const app = express();
const port = 4000;

db.mongoose.connect(db.url, () => {
    console.log("Db is running");
})

app.use(express.json());

app.use('/users', router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
