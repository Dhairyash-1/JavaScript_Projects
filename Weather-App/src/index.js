"use strict";
import apiRequestByName from "./api";
// import temp from "./api";
import { apiRequestByLocation } from "./api";
import "./styles/main.scss";
import clear from "./assets/clear.svg";
import cloud from "./assets/cloud.svg";
import haze from "./assets/haze.svg";
import rain from "./assets/rain.svg";
import snow from "./assets/snow.svg";
import storm from "./assets/storm.svg";

// Storing values in variable

const inputValue = document.querySelector("#cityName");
const getWeatherBtn = document.querySelector(".getWeatherBtn");
const locationBtn = document.querySelector(".getLocationBtn");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherStatus = document.querySelector(".weather-status");
const place = document.querySelector(".place");
const temprature = document.querySelector(".temp");

getWeatherBtn.addEventListener("click", () => {
  const cityName = inputValue.value;
  apiRequestByName(cityName);
});

apiRequestByName("jaipur");
// console.log(temp);

export default function updateData(temp, fl, des, city, country) {
  temprature.textContent = `${temp}°C`;
  weatherStatus.textContent = des;
  place.textContent = ` ${city}, ${country}`;

  if (des === "Clouds") {
    weatherIcon.src = cloud;
  } else if (des === "Clear") {
    weatherIcon.src = clear;
  } else if (des === "Haze") {
    weatherIcon.src = haze;
  } else if (des === "Rain") {
    weatherIcon.src = rain;
  } else if (des === "Snow") {
    weatherIcon.src = snow;
  } else if (des === "Storm") {
    weatherIcon.src = storm;
  }
}

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position);
  }
  function position(location) {
    const { latitude, longitude } = location.coords;
    console.log(location, latitude, longitude);
    apiRequestByLocation(latitude, longitude);
  }
});
