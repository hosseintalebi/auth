require('./config/config')

const _ = require('lodash')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

var { mongoose } = require('./db/mongoose')
var { User } = require('./models/user')

const app = express()

app.use(express.static(path.join(__dirname, '../', './client/build')))
app.use(bodyParser.json())

app.post('/users', (req, res) => {
  const body = _.pick(req.body, ['firstname', 'lastname', 'email', 'password'])
  const user = new User(body)

  user.save().then(() => {
    return user.generateAuthToken()
  }).then((token) => {
    res.header('x-auth', token).send(user)
  }).catch((e) => {
    res.status(400).send(e);
  })
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', './client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Started up at port ${port}`)
})

module.exports = { app }
