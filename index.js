const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require('./categoriess.json');

app.get('/', (req, res) => {
    res.send('dragon is running ')
})

app.use(cors());
app.get('/categories', (req, res) => {
    console.log(categories);
    res.send(categories);
})



app.listen(port, () => {
    console.log(`Dragon project is running on port ${port}`)
})