const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const db = require('./config/db');
const routes = require('./routes');
const errorHandleMiddlewares = require('./middlewares/errorHandleMiddlewares');

// Env variables
require("dotenv").config();
const port = process.env.PORT || 5000;

// Connect to DB
db.connect();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Successfully running");
});

// Route 
routes(app);

app.use(errorHandleMiddlewares.errorHandler);

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})