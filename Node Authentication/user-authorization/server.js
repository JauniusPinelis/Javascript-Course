const path = require('path');
//require('dotenv').config({ path: path.resolve(__dirname, './.env') })
require('dotenv').config();

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})