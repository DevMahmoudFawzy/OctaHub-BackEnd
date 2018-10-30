const express = require('express');
const app = express();
app.use(express.json());

const products = require('./routes/products');
const home = require('./routes/home');

app.use('/', home);
app.use('/api/products', products);

// You can set the port on windows from cmd with command 'set PORT=5000'
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));