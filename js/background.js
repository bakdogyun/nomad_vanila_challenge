const bgElement = document.querySelector("#main");

const chosenImage = Math.floor(Math.random() * 8 + 1);

bgElement.style = `background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("./img/${chosenImage}.jpg");`;
