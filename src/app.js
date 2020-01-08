const express = require('express')

console.log('OPENSHIFT_NODEJS_PORT:', process.env.OPENSHIFT_NODEJS_PORT)
console.log('OPENSHIFT_NODEJS_IP:', process.env.OPENSHIFT_NODEJS_IP)

console.log('PORT:', process.env.PORT)
console.log('IP:', process.env.IP)

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

app.listen(port, ipAddress, () => {
  console.log('Your server is running on port: ' + port)
})