const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: '/auth/spotify/callback'
    },
    async (accessToken, refreshToken, expires_in, profile, done) => {
      console.log(profile);
      const existingUser = await User.findOne({ spotifyId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        spotifyId: profile.id,
        lastSignedIn: Date.now()
      }).save();
      done(null, user);
    }
  )
);
