const database = require('../../../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query('SELECT * FROM album WHERE id = ?', [id])
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
