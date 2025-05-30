import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import searchIcon from "../../assets/search.png";
import humidityIcon from "../../assets/humidity.png";
import windIcon from "../../assets/wind.png";
import clearIcon from "../../assets/clear.png";
import cloudIcon from "@/assets/cloud.png";
import drizzleIcon from "../../assets/drizzle.png";
import rainIcon from "../../assets/rain.png";
import snowIcon from "../../assets/snow.png";
import darling from "../../assets/481874777_657833050073465_9007047459517628461_n.jpg";

type WeatherData = {
  humidity: any;
  windspeed: any;
  temperature: any;
  location: string | null;
  icon: any;
};

function Weather() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    handleSearch("Hanoi");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const allIcon: { [key: string]: string } = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": cloudIcon,
    "04n": cloudIcon,
    "09d": cloudIcon,
    "09n": cloudIcon,
    "10d": cloudIcon,
    "10n": cloudIcon,
    "13d": cloudIcon,
    "13n": cloudIcon,
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
    }
  };

  async function handleSearch(name: string) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcon[data.weather[0].icon] || clearIcon;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // alert("City name not found :( .");
      inputRef.current.value = "";

      setError(true);
      setWeatherData(false);
      setTimeout(() => {
        setError(false);
        handleSearch("Hanoi");
      }, 2000);
      inputRef.current.focus();
    }
  }

  const convertDateNow = (time: string = "") => {
    if (time) return time;
    const date = new Date();
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current) {
      handleSearch(inputRef.current.value);
    }
    if (event.currentTarget.value === "08032025" && inputRef.current) {
      inputRef.current.value = "Lan ❤️ Hung";
      setWeatherData({
        ...(weatherData || {}),
        icon: darling,
        location: "Coffee HanoiAn",
        temperature: "37",
        humidity: "99",
        windspeed: 99,
      });
    }
  };

  return (
    <>
      <div className="weather">
        <h1 className="title">Nice to meet you ^^ </h1>
        <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a city..."
              className="search-input"
              ref={inputRef}
              onKeyUp={handleInputKeyUp}
            />
            <img
              src={searchIcon}
              alt="btn-search"
              className="search-img t"
              onClick={() => {
                if (inputRef.current) {
                  handleSearch(inputRef.current.value);
                }
              }}
            />
          </div>
          <div
            className="content flex flex-col justify-center "
            style={{ alignItems: "center" }}
          >
            <img
              className="text-center"
              src={weatherData?.icon}
              alt="clearicon"
            />
            <p className="temperature">{weatherData?.temperature} độ C</p>
            <p className="location">{weatherData?.location}</p>
            <p>Time : {convertDateNow()}</p>
          </div>
          <div className="weather-data">
            <div className="col">
              <img src={humidityIcon} alt="" />
              <div>
                <p className="day">{weatherData?.humidity} %</p>
                <p className="temp">HUMIDIT</p>
              </div>
            </div>
            <div className="col">
              <img src={windIcon} alt="" />
              <div>
                <p className="day">{weatherData?.windspeed} km/h</p>
                <p className="temp">WINDSPEED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
