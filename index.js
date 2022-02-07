const express = require("express");
const app = express();
const port = 3000;
var url = require("url");

app.use((req, res, next) => {
  let pathname = url.parse(req.url, true).pathname;
  if (pathname == "/home") {
    res.send("Home");
  } else {
    next();
  }
});

app.use((req, res, next) => {
  let pathname = url.parse(req.url, true).pathname;
  if (pathname == "/forbidden") {
    let params = url.parse(req.url, true).search;
    if (params == "?secret=true") {
      res.send("Access approved");
    } else {
      res.send("Access denied");
    }
  } else {
    next();
  }
});

app.use((req, res, next) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  