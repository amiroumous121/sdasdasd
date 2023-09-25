const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Require the cors middleware

const app = express();
app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  console.log(req.body); // log the request body to the console

  // TODO: Process the contact data from req.body.name, req.body.email, and req.body.message

  res.status(200).send("Received your message!");
});

app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});
