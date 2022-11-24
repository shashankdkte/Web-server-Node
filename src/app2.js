const path = require("path");
const express = require("express");

const app = express();
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));
// app.get("", (req, res) => {
//   res.send("<h3>Hello express</h3>");
// });


app.get("/help", (req, res) => {
  res.send("<h3>I am here to Help</h3>");
});

app.get("/about", (req, res) => {
  res.send("<h3>What is this about</h3>");
});
app.get("/weather", (req, res) => {
  res.send({
    location: "Mumbai",
    forecast: "It is cloudy and temperature is 25 degrees",
  });
});
app.listen(3000, () => {
  console.log("app is running at 3000");
});
