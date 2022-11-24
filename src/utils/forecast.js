const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6381d12dc84f211c9ad933be49bd06f1&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current);
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Weather is " +
          response.body.current.weather_descriptions[0] +
          " and the temperature is " +
          response.body.current.temperature
      );
    }
  });
};
module.exports = forecast;
