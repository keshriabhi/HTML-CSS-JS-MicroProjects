window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let icons = document.getElementById("icon");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      //   console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherstack.com/current?access_key=91e0f748cd2513dedd9adb536727d0fd&query=${lat},${long}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data);

          const {
            temperature,
            weather_descriptions,
            weather_icons,
          } = data.current;
          //set DOM Elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = weather_descriptions;
          locationTimezone.textContent = data.location.timezone_id;
          //console.log(weather_icons);

          //Formula for Celsius
          let Fahrenheit = temperature * 1.8 + 32;

          //set Icon
          icon.src = weather_icons;

          // change temperature to Celsius/Farenheit
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "C") {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = Math.floor(Fahrenheit);
            } else {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  }
});
