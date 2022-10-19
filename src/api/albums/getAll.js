const database = require('../../../database');

module.exports = (req, res) => {
  database
    .query('select * from album')
    .then(([album]) => {
      res.json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error');
    });
};
