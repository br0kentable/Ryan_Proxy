const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 4338;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/logo.png', function (req, res) {
  res.sendFile(path.resolve("public/logo.png"));
});

app.get('/priceIcon.png', function (req, res) {
  res.sendFile(path.resolve("public/priceIcon.png"));
});

app.get('/comment.png', function (req, res) {
  res.sendFile(path.resolve("public/comment.png"));
});

app.get('/utensilIcon.png', function (req, res) {
  res.sendFile(path.resolve("public/utensilIcon.png"));
});

app.get('/provided_by.png', function (req, res) {
  res.sendFile(path.resolve("public/provided_by.png"));
});

app.get('/search.jpg', function (req, res) {
  res.sendFile(path.resolve("public/search.jpg"));
});

app.get('/restaurants/logo.png', function (req, res) {
  res.sendFile(path.resolve("public/logo.png"));
});

app.get('/restaurants/priceIcon.png', function (req, res) {
  res.sendFile(path.resolve("public/priceIcon.png"));
});

app.get('/restaurants/comment.png', function (req, res) {
  res.sendFile(path.resolve("public/comment.png"));
});

app.get('/restaurants/utensilIcon.png', function (req, res) {
  res.sendFile(path.resolve("public/utensilIcon.png"));
});

app.get('/restaurants/provided_by.png', function (req, res) {
  res.sendFile(path.resolve("public/provided_by.png"));
});

app.get('/restaurants/search.jpg', function (req, res) {
  res.sendFile(path.resolve("public/search.jpg"));
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve("public/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
