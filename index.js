const express = require('express');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
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

// respond to POST req containing the path "/users" and add a object from, in this case, postman.
// the book uses a hard coded example but Matt walked us through the postman thing in class. Pretty cool.

app.post('/users', (req, res) => {
  const length = users.length;
  const newPerson = {
      id: length + 1,
      ... req.body
  }
  users.push(newPerson)
  res.json(users)
})

// respond to PUT at "/users/1" and change any key value on the first user object
app.put('/users/:userId', (req,res) => {
  let InfoChange = users.filter(each => each._id == req.params.userId) 
  InfoChange[0].name = "Billie Holiday"
  res.json(InfoChange);
})

// respond to Delete req at "users/userId:" by finding user at id and create a new key value
//called isactive.
app.delete('/users/:userId', (req,res) => {
  let UserDel = users.filter(each =>
    each._id == req.params.userId)
    UserDel[0].isActive = false
    res.send("deleted")
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))