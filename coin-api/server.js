const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

let coin = {
  heads: 'heads',
  tails: 'tails',
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/coin', (request, response) => {
  response.json(coin);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
