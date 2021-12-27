const app = require("./src/app");
const connect = require("./src/utils/connect");

const port = process.env.PORT || 3001;

app.listen(port, async () => {
    console.log("Server is running on port " + port);
    await connect();
});