const express = require('express');
const app = express();
const port = 3000;
const connection = require("./db");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.put('/api/movies/:id', (req, res) => {

  const idMovie = req.params.id;
  const formData = req.body;

   connection.query('UPDATE movie SET ? WHERE id = ?', [formData, idMovie], err => {
    if (err) {
      res.status(500).send("Error editing a movie");
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});