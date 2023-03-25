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

function dateFromTime(time) {
  const date = new Date(time * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const formattedDate = `${String(day).padStart(2, "0")}/${String(
    month
  ).padStart(2, "0")}`;
  return formattedDate;
}

function longDateFromTime(time) {
  const d = new Date(time * 1000);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d
    .toLocaleDateString("en-US", options)
    .replace(/(\d)(st|nd|rd|th)/, "$1<span>$2</span>");
}

export { kelvinToCelsius, timeConvert, getDay, dateFromTime, longDateFromTime };
