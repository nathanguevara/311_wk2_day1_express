
const express = require('express')
const app = express()
app.use(express.json());
const port = process.env.PORT || 4000

const { users } = require('./state')

// respond to GET req containing path "/users" by returning users array
 app.get('/users', (req, res) => {
   res.json(users)
 });

// respond to GET req containing path "/users/1" by returning the first object
// from users array
app.get('/users/1', (req, res) => {
  res.json(users[0]);
})
app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))