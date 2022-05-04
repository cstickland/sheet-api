require('dotenv').config();
const express = require('express');
const axios = require("axios");

const port = process.env.PORT;
const host = '0.0.0.0';
const sheet = process.env.SHEET;
const key = process.env.KEY;
const page = process.env.PAGE;
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet}/values/${page}`

const app = express();
app.get('/', async (req, res) => {
    const result = await axios.get(url, {
        params: {
            key: key,
            majorDimension: 'COLUMNS'
        }
    })
    res.send("hello");
    console.log("endpoint reached")
});

app.listen(port, host, () => console.log(`Listening on the port ${port}! ${host}`))