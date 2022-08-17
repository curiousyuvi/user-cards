const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/hello", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
