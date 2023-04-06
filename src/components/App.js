/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/Location.css";
import ForecastSummary from "./ForecastSummary";
import "../styles/Card.css";
import Location from "./Location";
import SearchForm from "./SearchForm";
import "../styles/SearchForm.css";

function App() {
  const [location, setLocation] = useState(null);
  const [userInput, setUserInput] = useState("London");

  const handleSearch = (input) => {
    setUserInput(input);
  };

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=${API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, [userInput]);

  return (
    <div className="App">
      {location ? (
        <>
          <Location location={location} />
          <SearchForm onSearch={handleSearch} />
          <ForecastSummary userInput={userInput} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
