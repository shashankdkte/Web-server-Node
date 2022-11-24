const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicDirectory = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../views/partials");

app.set("view engine", "hbs");
app.use(express.static(publicDirectory));
hbs.registerPartials(partialPath);

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
app.get("/help/*", (req, res) => {
  res.render("404page", {
    title: "Help Page",
    message: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404page", {
    title: "Unknown",
    message: "Page Not found",
  });
});
app.listen(3000, () => {
  console.log("app is running at 3000");
});
