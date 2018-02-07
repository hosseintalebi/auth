const _ = require('lodash')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { SALT } = require('./constants')

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

UserSchema.methods.toJSON = function() {
  const user = this
  const userObject = user.toObject()
  return _.pick(userObject, ['_id', 'email', 'firstname', 'lastname'])
}
UserSchema.methods.generateAuthToken = function() {
  const user = this
  const access = 'auth'
  const token = jwt
    .sign({ _id: user._id.toHexString(), access }, SALT)
    .toString()
  user.tokens.push({
    access,
    token,
  })
  return user.save().then(() => {
    return token
  })
}

UserSchema.statics.findByToken = function(token) {
  const User = this
  let decoded
  try {
    decoded = jwt.verify(token, SALT)
  } catch (e) {
    return Promise.reject()
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  })
}

UserSchema.statics.findByCredentials = function(email, password) {
  const User = this
  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject()
    }
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user)
        }
        reject()
      })
    })

  })
}

UserSchema.pre('save', function(next) {
  const user = this
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err,hash) => {
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }
