import React from "react";
import magnify from "../assets/magnify.svg";

export default function SearchForm() {
  return (
    <section className="search--form">
      <input type="text" />
      <button className="search--button" type="button">
        <img src={magnify} alt="magnify icon" />
      </button>
    </section>
  );
}
