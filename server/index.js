const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use('/:id', express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});