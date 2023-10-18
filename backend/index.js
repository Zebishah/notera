const connectDB = require("./db");
const express = require('express');
require('dotenv').config();
const app = express();
var cors = require('cors')
app.use(cors({
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
}))
app.use(express.json())
const port = 5000;
connectDB();
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + port);
})
