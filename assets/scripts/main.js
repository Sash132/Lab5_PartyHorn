//main.js

//This sections checks for and changes images and sounds related to the
//different types of horns.
let air_horn = document.getElementById("radio-air-horn");
let car_horn = document.getElementById("radio-car-horn");
let party_horn = document.getElementById("radio-party-horn");
let sound_image = document.getElementById("sound-image");
let horn_sound = document.getElementById("horn-sound");

air_horn.addEventListener("change", change_horn);
car_horn.addEventListener("change", change_horn);
party_horn.addEventListener("change", change_horn);

function change_horn() {
  if(air_horn.checked) {
    horn_sound.src = "./assets/media/audio/air-horn.mp3";
    sound_image.src = "./assets/media/images/air-horn.svg";
  } 
  else if(car_horn.checked) {
    horn_sound.src = "./assets/media/audio/car-horn.mp3";
    sound_image.src = "./assets/media/images/car.svg";
  } 
  else if(party_horn.checked) {
    horn_sound.src = "./assets/media/audio/party-horn.mp3";
    sound_image.src = "./assets/media/images/party-horn.svg";
  }
}

//This section manages the ideas behind having the volume number and
//volume slider as each is updated while also performing certain
//edge checks.
let volume_number = document.getElementById("volume-number");
let volume_slider = document.getElementById("volume-slider");
let volume_icon = document.getElementById("volume-image");
let horn_button = document.getElementById('honk-btn');

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

function change_volume_icon() {
  horn_button.disabled = false;
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
    horn_button.disabled = true;
  }
}

//This section deals with submitting forms and making sure
//that the audio file is played.
let form = document.getElementById('party-horn-form');

form.addEventListener("submit", play_sound);

function play_sound(event) {
  event.preventDefault();
  horn_sound.play();
}
