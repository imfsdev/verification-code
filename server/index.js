const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server started on port 5000");
});

app.post("/", (req, res) => {
  const { code } = req.body;
  if (code.length !== 6 || code.slice(-1) === "7") {
    return res.status(404).json({
      message: "Verification Failed!"
    });
  } else {
    return res.send({ success: true });
  }
});
// start express server on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
