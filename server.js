let express = require('express');
const ejs = require('ejs');

let app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('pages/home');
});

app.get('/:page?', function (req, res) {
    const page = req.params.page || 'home';
    res.render('pages/' + page);
});

app.listen(8080);