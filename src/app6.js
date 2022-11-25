const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../views/partials");

app.set("view engine", "hbs");
app.use(express.static(publicDirectory));
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
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
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({
        error,
      });
    }
    forecast(data.latitude, data.longitude, (error, forecastedData) => {
      if (error) {
        return res.send({
          error,
        });
      }
      res.send({
        location: data.location,
        address: req.query.address,
        forecast: forecastedData,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide search term",
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
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
app.listen(port, () => {
  console.log("app is running at " + port);
});
