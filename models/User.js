const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  spotifyId: {
    type: String,
    required: true
  },
  lastSignedIn: Number
});

mongoose.model('User', userSchema);
