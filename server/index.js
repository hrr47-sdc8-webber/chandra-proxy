const newrelic = require('newrelic')
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use('/:id', express.static('public'));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});