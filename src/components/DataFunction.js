function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}

function timeConvert(time) {
  const newTime = new Date(time * 1000);
  const newHours = newTime.getHours();
  const newMinutes = newTime.getMinutes();
  const formattedTime = `${String(newHours).padStart(2, "0")}:${String(
    newMinutes
  ).padStart(2, "0")}`;
  return formattedTime;
}

function getDay(unix) {
  const date = new Date(unix);
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayOfWeek;
}

export { kelvinToCelsius, timeConvert, getDay };
