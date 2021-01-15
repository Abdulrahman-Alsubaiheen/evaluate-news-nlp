const dotenv = require('dotenv');
dotenv.config();

projectData = {}
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const API_KEY = process.env.API_KEY;

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");

const express = require('express')
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// ~~~~~~ Routes ~~~~~~

// $
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// ( POST )  
app.post('/api', async (req, res) => {

    const response = await fetch(`${baseUrl}?key=${API_KEY}&of=json&url=${req.body.url}&model=general&lang=en`);
    const data = await response.json();

    res.send(data);
});