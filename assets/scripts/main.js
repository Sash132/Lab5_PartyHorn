//main.js
let air_horn = document.getElementById("radio-air-horn");
let car_horn = document.getElementById("radio-car-horn");
let party_horn = document.getElementById("radio-party-horn");
let sound_image = document.getElementById("sound-image");
let horn_sound = document.getElementById("horn-sound");

air_horn.addEventListener("change", change_airhorn);
car_horn.addEventListener("change", change_carhorn);
party_horn.addEventListener("change", change_partyhorn);

function change_airhorn() {
  horn_sound.src = "./assets/media/audio/air-horn.mp3";
  sound_image.src = "./assets/media/images/air-horn.svg";
}

function change_carhorn() {
  horn_sound.src = "./assets/media/audio/car-horn.mp3";
  sound_image.src = "./assets/media/images/car.svg";
}

function change_partyhorn() {
  horn_sound.src = "./assets/media/audio/party-horn.mp3";
  sound_image.src = "./assets/media/images/party-horn.svg";
}


let volume_number = document.getElementById("volume-number");
let volume_slider = document.getElementById("volume-slider");

volume_number.addEventListener("input", input_volumenumber);
volume_slider.addEventListener("input", input_volumeslider);

function input_volumenumber() {
  volume_number.value = volume_slider.value;
  horn_sound.volume = volume_number.value / 100;
}

function input_volumeslider() {
  volume_slider.value = volume_number.value;
  horn_sound.volume = volume_slider.value / 100;
}
