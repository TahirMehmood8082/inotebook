const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
// We can use express as shown as below
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Tahir!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})