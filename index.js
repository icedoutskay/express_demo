const express = require('express');
const app = express();
const books = require('./routes/books');
const logger = require('./middleware/logger');

app.use('/books', books);


app.listen(3000, () =>  console.log('listening on port 3000...'));
