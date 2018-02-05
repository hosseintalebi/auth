const _ = require('lodash')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: isEmail,
      message: '{VALUE} not a valid email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

UserSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  return _.pick(userObject, ['_id', 'email'])
}
UserSchema.methods.generateAuthToken = function() {
    const user = this
    const access = 'auth'
    const token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString()
    user.tokens.push({
      access, token,
    })
    return user.save().then(() => {
      return token
    })
}

const User = mongoose.model('User', UserSchema);

module.exports = { User }