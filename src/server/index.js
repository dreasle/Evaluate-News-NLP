const dotenv = require('dotenv')
dotenv.config()

// Express to run server and routes
const express = require('express')

// const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi")

// Start up app instance
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

// Set up body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set up cors
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
// var port = 8081
var port = 8080
app.listen(port, function () {
    console.log(`Running on port ${port}!`)
})

// set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    })

// POST route
app.post('/sentiment', function (req, res) {
    textapi.sentiment({
        'url': req.body.sentmturl
        }, function(error, response) {
            if (error === null) {
                console.log(response)
                res.send(response)
            }
    })
})
