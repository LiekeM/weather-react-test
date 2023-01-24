import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icons(props) {
  let defaults = {
    animate: true,
  };

  return (
    <ReactAnimatedWeather
      icon={props.icon}
      color={props.color}
      size={props.size}
      animate={defaults.animate}
    />
  );
}
