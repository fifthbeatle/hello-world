const express = require('express')

console.log('RUNNING THE HELLO WORLD APPLICATION!')

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const app = express()

app.get('/', (req, res) => {
  console.log('Received a HTTP request!')
  res.send('Hello world')
})

app.get('/home', (req, res) => {
  console.log('Received a HTTP request!')
  res.send('Welcome to the home page!')
})

app.listen(8080)

console.log('Server is up on 8080')