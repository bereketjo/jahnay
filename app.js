const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.engine("ejs", ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) =>{
  res.render('home')
});

app.get('/narrative', (req, res) => {
  res.render('narrative')
});

app.get('/calendar', (req, res) => {
  res.render('calendar')
});

app.get('/support', (req, res) => {
  res.render('support')
});

app.get('/try', (req, res) => {
  res.render('try')
});

app.listen(3000, ()=> {
  console.log('Serving on port 3000')
});
