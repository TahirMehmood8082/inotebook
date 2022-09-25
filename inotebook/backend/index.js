const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
// We can use express as shown as below
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Tahir!')
// })
//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})