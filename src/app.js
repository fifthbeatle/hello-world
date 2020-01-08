const express = require('express')

const port = 8080

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port)

console.log('Server is running on port: ' + port)