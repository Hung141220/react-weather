import React from "react";
import Weather from "./components/weather/Weather";
import SimpleSlider from "./components/slick/SimpleSlider";
// import "./App.css";

export default function App() {
  return (
    <>
      <div className="app">
        <Weather />
        <SimpleSlider />
      </div>
    </>
  );
}
