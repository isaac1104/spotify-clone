const passport = require('passport');

module.exports = app => {
  app.get('/auth/spotify', passport.authenticate('spotify', { scope: ['user-read-email', 'user-read-private' ] }));
  app.get('/auth/spotify/callback', passport.authenticate('spotify'), (req, res) => {
    res.redirect('/home');
  });
  app.get('/api/current_user', (req, res) => {
    res.status(200).send(req.user);
  });
  app.get('/api/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
