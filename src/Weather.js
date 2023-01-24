import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState();

  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b29c908b2b975675d8f2a8a569aaa024&units=metric
`;
  axios.get(url).then(displayTemperature);

  return (
    <div>
      <h2 className="Weather">
        {" "}
        WEATHER: The temperature in {props.city} is {Math.round(temperature)}°C
      </h2>
    </div>
  );
}
