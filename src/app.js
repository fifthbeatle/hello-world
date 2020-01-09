const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our Node.js application!</h1>')
})

app.listen(8080, () => {
  console.log('Server is listening on the port: 8080')
})