const express = require ('express');
const router = express.Router();


let book = [
    {id: 1, title: 'Half of a yellow sun', author: 'Chimamanda Ngozi Adiche'},
    {id: 2, title: 'A flying Hobo', author: 'Odikpo Somkenechukwu'}
];

// GET /books
router.get('/:id', (req, res) => { 
    let selectedBook = book.find(c => c.id === parseInt(req.params.id));
    
    if (!selectedBook) res.status(404).send('book not found.');
     
    res.send(selectedBook);
});

// PUT /books
router.put('/:id', (req, res) => { 
    const data = req.body;

    if (!data || !data.title || !data.author) {
        res.status(400).send('Invalid data provided.');
        return;
    }

    const  newBook = {
        id: book.length + 1,
        title: data.title,
        author: data.author
    };
    book.push(newBook);
    res.send({ message: 'Book added successfully', book: newBook});
});

// DELETE /books
router.delete('/:id', (req, res) => {
    let selectedBook = book.find(c => c.id === parseInt(req.params.id));
   
   
    if (!book) res.status(404).send('book not found.');
    let index = book.indexOf(selectedBook);
    book.splice(index, 1);
    
    res.send({ message: 'All books deleted successfully' });
});



// POST /books/author
router.post('/', (req, res) => {
    const data = req.body;
    
    if (!data || !data.title || !data.author) {
        return res.status(400).json({ error: 'Invalid data provided.' });
    }

    let newBook = {
        id: book.length + 1,
        title: data.title,
        author: data.author
    };
    book.push(newBook);
    res.send({ message: 'Book added successfully', book: newBook });
});



module.exports = router;