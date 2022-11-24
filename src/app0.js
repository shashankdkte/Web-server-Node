const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h3>Hello express</h3>");
});

app.get("/help", (req, res) => {
  res.send("<h3>I am here to Help</h3>");
});

app.get("/about", (req, res) => {
  res.send("<h3>What is this about</h3>");
});
app.get("/weather", (req, res) => {
  res.send("<h3>Today is partially cloudy</h3>");
});
app.listen(3000, () => {
  console.log("app is running at 3000");
});
