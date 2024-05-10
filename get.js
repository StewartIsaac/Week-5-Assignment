const express = require('express');
const app = express();

const products = [  // Sample product data
  { id: 1, name: 'T-Shirt', price: 20.00 },
  { id: 2, name: 'Mug', price: 12.50 },
  { id: 3, name: 'Cap', price: 15.99 },
];

app.get('/api/products', (req, res) => {
  // Select a random number of products
  const randomProductCount = Math.floor(Math.random() * (products.length - 1)) + 1;
  
  // Select a random subset of products
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, randomProductCount);

  res.json(randomProducts);
});

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});