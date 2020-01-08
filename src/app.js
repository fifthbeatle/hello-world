const express = require('express')

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, ipAddress, () => {
  console.log('Your server is running on port: ' + port)
})