// Server javascript file

// Load environment variables
const dotenv = require('dotenv')
dotenv.config()

// Express to run server and routes
const express = require('express')

// Aylien natural language processing SDK
var aylien = require("aylien_textapi")

// Init app instance
const app = express()
app.use(express.static('dist'))

// Set up body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set up cors
const cors = require('cors');
app.use(cors());

// Set up default index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Spin up express server
// var port = 8081 // This is for dev - USE ENV Vars!!
var port = 8080 // This is for prod - USE ENV Vars!!
app.listen(port, function () {
    console.log(`Running on port ${port}!`)
})

// set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    })

// POST route for sentiment call
app.post('/sentiment', function (req, res) {
    textapi.sentiment({
        'url': req.body.sentmturl
        }, function(error, response) {
            if (error === null) {
                res.send(response)
            }
            console.log(response)
        })
})
