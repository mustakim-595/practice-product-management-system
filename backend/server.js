require("dns").setServers([
    "8.8.8.8",
    "8.8.4.4"
]);

const app = require('./app');
const dbConnect = require("./config/db");
require("dotenv").config();

const port = process.env.PORT;

app.listen(port, async () => {
    await dbConnect();
    console.log("Server is running..");
});