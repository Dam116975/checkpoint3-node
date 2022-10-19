module.exports = (req, res) => {};
const database = require('../../../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id_album);
  database
    .query(
      'SELECT album.title AS albumt, track.title AS titlet, youtube_url FROM track JOIN album ON album.id=track.id_album',
      [id]
    )
    .then(([album]) => {
      if (album[0] != null) {
        res.json(album[0]);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
