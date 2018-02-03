// server.js

const http = require('http')
const dotenv = require('dotenv').config()
const request = require('request')
const port = process.env.PORT || 3000
const googleApiKey = process.env.GOOGLE_API_KEY

if (googleApiKey === '' || googleApiKey === undefined) {
    console.log('Need to add Google API key to the .env file.')
    return
}

// Example Google API Call

let makeGoogleCall = function () {
    request({ method: 'GET',
        uri: `https://maps.googleapis.com/maps/api/geocode/json?address=Sheridan,Wyoming&key=${googleApiKey}`
    },
    function (error, response, body) {
        console.log(body)
    })
}
makeGoogleCall()

// Server stuff

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello from the server.')
}

const server = http.createServer(requestHandler)

server.listen(port, function (err) {
  if (err) {
    return console.log('Something bad happened.', err)
  }
  console.log(`Listening on ${port}`)
})