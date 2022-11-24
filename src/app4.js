const path = require("path");
const express = require("express");

const app = express();

//Paths for Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

//Setup handlebars
app.set("view engine", "hbs");
app.set("views", viewsPath); 

//Setup static directory
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Index Page",
    name: "Jethalal Gada ",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Roshan Singh Sodhi ",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Aatmaram Tukaram Bhide ",
  });
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
