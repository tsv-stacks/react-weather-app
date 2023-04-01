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
  const date = new Date(time);
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

function getIconCode(id) {
  const num = Number(id);

  if (num >= 200 && num < 300) {
    return "11d";
  }
  if (num >= 300 && num < 400) {
    return "09d";
  }
  if (num >= 500 && num <= 510) {
    return "10d";
  }
  if (num === 511) {
    return "13d";
  }
  if (num >= 520 && num <= 531) {
    return "09d";
  }
  if (num >= 600 && num < 700) {
    return "13d";
  }
  if (num >= 700 && num < 800) {
    return "50d";
  }
  if (num === 800) {
    return "01d";
  }
  if (num === 801) {
    return "02d";
  }
  if (num === 802) {
    return "03d";
  }
  if (num === 803 || num === 804) {
    return "04d";
  }
  return "Error: Code not Recognised";
}

export {
  kelvinToCelsius,
  timeConvert,
  getDay,
  dateFromTime,
  longDateFromTime,
  getIconCode,
};
