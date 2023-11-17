const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const validator = require('validator')

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      default: "npc",
    },
    projectIds: {
      type: [String],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email })
  if (user) {
      const auth = await bcrypt.compare(password, user.password)
      if (auth) {
          return user
      }
      throw Error('incorrect password')
  }
  throw Error('incorrect email')
}


const User = mongoose.model('user', UserSchema)
UserSchema.plugin(uniqueValidator)

module.exports = User