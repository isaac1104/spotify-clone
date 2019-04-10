const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  spotifyId: {
    type: String,
    required: true
  },
  accessToken: String,
  displayName: String,
  profileUrl: String,
  followers: Number,
  photo: String,
  lastSignedIn: Number
});

mongoose.model('User', userSchema);
