const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});