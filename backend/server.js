const express = require('express')
const prompt = require('./chatBot')
app = express()
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000)

