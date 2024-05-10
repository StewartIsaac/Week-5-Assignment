const express = require('express');
const app = express();

let products = [  // Sample product data (replace with your data source)
  { id: 1, name: 'T-Shirt', price: 20.00 },
  { id: 2, name: 'Mug', price: 12.50 },
  { id: 3, name: 'Cap', price: 15.99 },
];

function generateRandomProduct() {
  const names = ['Shirt', 'Hat', 'Watch', 'Book', 'Speaker'];
  const prices = [10.00, 25.99, 59.95, 15.50, 79.99];
  
  return {
    id: Math.floor(Math.random() * 100000) + 1, // Generate unique-ish ID
    name: names[Math.floor(Math.random() * names.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
  };
}

app.post('/api/products', (req, res) => {
  const newProduct = generateRandomProduct();
  products.push(newProduct);

  res.status(201).json({ message: 'Product added successfully!', product: newProduct });
});

const port = process.env.PORT || 4300;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
