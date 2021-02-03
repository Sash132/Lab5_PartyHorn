//main.js

//This section manages the ideas behind having the volume number and
//volume slider as each is updated while also performing certain
//edge checks.
const volume_number = document.getElementById("volume-number");
const volume_slider = document.getElementById("volume-slider");
const volume_icon = document.getElementById("volume-image");
const horn_button = document.getElementById('honk-btn');
const horn_sound = document.getElementById("horn-sound");

volume_number.addEventListener("input", update_volume_number);
volume_slider.addEventListener("input", update_volume_slider);

function update_volume_number() {
  volume_slider.value = volume_number.value;
  horn_sound.volume = volume_number.value / 100;
  change_volume_icon();
}

function update_volume_slider() {
  volume_number.value = volume_slider.value;
  horn_sound.volume = volume_number.value / 100;
  change_volume_icon();
}

function check_disabled_button() {
  if(volume_number.value == 0) {
    horn_button.disabled = true;
  }
  else {
    horn_button.disabled = false;
  }
}

function check_volume_icon() {
  if(volume_number.value >= 67) {
    volume_icon.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if(volume_number.value >= 34) {
    volume_icon.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if(volume_number.value >= 1) {
    volume_icon.src = "./assets/media/icons/volume-level-1.svg";
  }
  else {
    volume_icon.src = "./assets/media/icons/volume-level-0.svg";
  }
  
  check_disabled_button();
}

//This sections checks for and changes images and sounds related to the
//different types of horns.
const airhorn = document.getElementById("radio-air-horn");
const carhorn = document.getElementById("radio-car-horn");
const partyhorn = document.getElementById("radio-party-horn");
const sound_image = document.getElementById("sound-image");

airhorn.addEventListener("change", change_to_airhorn);
carhorn.addEventListener("change", change_to_carhorn);
partyhorn.addEventListener("change", change_to_partyhorn);

function change_to_airhorn() {
  horn_sound.src = "./assets/media/audio/air-horn.mp3";
  sound_image.src = "./assets/media/images/air-horn.svg";
}

function change_to_carhorn() {
  horn_sound.src = "./assets/media/audio/car-horn.mp3";
  sound_image.src = "./assets/media/images/car.svg";
}

function change_to_partyhorn() {
  horn_sound.src = "./assets/media/audio/party-horn.mp3";
  sound_image.src = "./assets/media/images/party-horn.svg";
}

//This section deals with submitting forms and making sure
//that the audio file is played.
const form = document.getElementById('party-horn-form');

form.addEventListener("submit", submit_form);

function submit_form(event) {
  event.preventDefault();
  horn_sound.play();
}
