const express = require('express')
app = express()
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000)