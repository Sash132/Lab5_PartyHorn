//main.js
let air_horn = document.getElementById("radio-air-horn");
let car_horn = document.getElementById("radio-car-horn");
let party_horn = document.getElementById("radio-party-horn");
let sound_image = document.getElementById("sound-image");

air_horn.addEventListener("click", click_airhorn);
car_horn.addEventListener("click", click_carhorn);
party_horn.addEventListener("click", click_partyhorn);

function click_airhorn() {
  audio.src = "./assets/media/audio/air-horn.mp3";
  sound_image.src = "./assets/media/images/air-horn.svg";
}

function click_carhorn() {
  audio.src = "./assets/media/audio/car-horn.mp3";
  sound_image.src = "./assets/media/images/car.svg";
}

function click_partyhorn() {
  audio.src = "./assets/media/audio/party-horn.mp3";
  sound_image.src = "./assets/media/images/party-horn.svg";
}
