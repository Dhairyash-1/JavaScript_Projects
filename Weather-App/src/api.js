"use strict";
import updateData from "./index";
const api_key = "6d667575827b9c33b695503cf83e9e65";

// fetching weather Api using City Name
export default async function apiRequestByName(name) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}`
  );
  const data = await res.json();
  console.log(data);
  const city = data.name;
  const country = data.sys.country;
  const weatherDes = data.weather[0].main;
  const { feels_like, temp } = data.main;
  const degreeTemp = Math.floor(temp - 273.15);
  const degreeFeelsLike = Math.floor(feels_like - 273.15);
  updateData(degreeTemp, degreeFeelsLike, weatherDes, city, country);
  console.log(degreeTemp, degreeFeelsLike, weatherDes, city, country);
}

// fetching weather Api using Current location
export async function apiRequestByLocation(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
  );
  const data = await res.json();
  console.log(data);
  // console.log("this", lat, lon);

  // extracting all data from api
  const city = data.name;
  const country = data.sys.country;
  const weatherDes = data.weather[0].main;
  const { feels_like, temp } = data.main;
  const degreeTemp = Math.floor(temp - 273.15);
  const degreeFeelsLike = Math.floor(feels_like - 273.15);
  updateData(degreeTemp, degreeFeelsLike, weatherDes, city, country);
}
