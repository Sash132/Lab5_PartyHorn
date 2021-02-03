//main.js
let air_horn = document.getElementById("radio-air-horn");
let car_horn = document.getElementById("radio-car-horn");
let party_horn = document.getElementById("radio-party-horn");
let sound_image = document.getElementById("sound-image");

air_horn.addEventListener("change", click_airhorn);
car_horn.addEventListener("change", click_carhorn);
party_horn.addEventListener("change", click_partyhorn);

function click_airhorn() {
  sound_image.src = "./assets/media/images/air-horn.svg";
}

function click_carhorn() {
  sound_image.src = "./assets/media/images/car.svg";
}

function click_partyhorn() {
  sound_image.src = "./assets/media/images/party-horn.svg";
}
