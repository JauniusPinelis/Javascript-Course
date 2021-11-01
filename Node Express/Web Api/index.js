const express = require('express');

const app = express();
const port = 4000;

app.get("/", (req,res) => {
    console.log("GET!")
    res.send("Get action works");
})

app.listen(port, () => {
    console.log('Server is running');
})
