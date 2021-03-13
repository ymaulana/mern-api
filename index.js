const express = require("express");

const app = express();

app.use(() => {
  console.log("hallo server");
  console.log("parlonte");
});

app.listen(4000);
