const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('location', (req, res) => {
    console.log('Received location:', req.body);
    res.status(200).send('Location received');
});

app.listen(port, () => {
    console.log('Server listening at http://localhost:${port}');
});


