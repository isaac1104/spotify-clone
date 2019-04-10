const axios = require('axios');

module.exports = app => {
  app.get('/api/saved_tracks', async (req, res) => {
    try {
      const { accessToken } = req.user;
      const request = await axios.get('https://api.spotify.com/v1/me/tracks?market=US&limit=50', { headers: { Authorization: `Bearer ${accessToken}` } });
      const { data } = request;
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });
}
