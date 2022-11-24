console.log("Client side script");
// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch("http://localhost:3000/weather?address=Mumbai").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const formValue = document.querySelector("form");
const searchTerm = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");
const url = "http://localhost:3000/weather?address=";

messageOne.textContent = " ";

formValue.addEventListener("submit", (e) => {
  messageOne.textContent = "Loading...";
  messageTwo.textContent = " ";
  e.preventDefault();
  const location = searchTerm.value;
  console.log(location.length);
  if (!location || location.length === 0) {
    messageOne.textContent = "Please send address";
  } else {
    fetch(url + location).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
          messageOne.textContent = data.error;
        } else {
          console.log(data.location);
          console.log(data.forecast);
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    });
  }
});
