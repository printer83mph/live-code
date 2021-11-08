const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  questions: [{ type: String }]
})

module.exports = model('User', userSchema)