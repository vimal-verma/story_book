const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
  },
  imgurl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default : Date.now
  }
  
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;