const mongoose = require('mongoose');
const User = require('./user')
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['public', 'private']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  createdAt: {
    type: Date,
    default : Date.now
  }
  
});

const Story = mongoose.model('Story', StorySchema);
module.exports = Story;