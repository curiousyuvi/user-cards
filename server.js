const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const usersEndpoint = "https://jsonplaceholder.typicode.com/users";

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(usersEndpoint);
    if (response.status === 200) res.status(200).json({ users: response.data });
    else res.status(response.status).json({ message: "failure" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), (err) => {
      if (err) res.status(500).send(err);
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
