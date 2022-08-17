const axios = require("axios");
const express = require("express");
const app = express();
const PORT = 5000;
const usersEndpoint = "https://jsonplaceholder.typicode.com/users";

app.get("/api/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(usersEndpoint);
    console.log("status:", response.status);
    if (response.status === 200) res.status(200).json({ users: response.data });
    else res.status(response.status).json({ message: "failure" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
