import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import searchIcon from "../../assets/search.png"; // Assuming you have a search icon in this path
import humidityIcon from "../../assets/humidity.png"; // Assuming you have a search icon in this path
import windIcon from "../../assets/wind.png"; // Assuming you have a search icon in this path
import clearIcon from "../../assets/clear.png"; // Assuming you have a search icon in this path
import cloudIcon from "../../assets/cloud.png"; // Assuming you have a search icon in this path
import drizzleIcon from "../../assets/drizzle.png"; // Assuming you have a search icon in this path
import rainIcon from "../../assets/rain.png"; // Assuming you have a search icon in this path
import snowIcon from "../../assets/snow.png"; // Assuming you have a search icon in this path

type WeatherData = {
  humidity: any;
  windspeed: any;
  temperature: any;
  location: string | null;
  icon: any;
};

function Weather() {
  const inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState<WeatherData | boolean>(false);
  useEffect(() => {
    handleSearch("Hanoi");
  }, []);

  const allIcon = {
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
  const handleInputChange = (event) => {
    // Loại bỏ tất cả khoảng trắng ngay khi người dùng gõ
    inputRef.current.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
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
      alert("City name not found :( .");
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div className="weather">
        {weatherData ? (
          <>
            <h1 className="title">Nice to meet you ^^ </h1>
            <div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for a city..."
                  className="search-input"
                  ref={inputRef}
                  onChange={handleInputChange}
                  onKeyUp={(event) => {
                    if (event.key === "Enter" && inputRef.current) {
                      handleSearch(inputRef.current.value);
                    }
                  }}
                />
                <img
                  src={searchIcon}
                  alt="btn-search"
                  className="search-img"
                  onClick={() => {
                    if (inputRef.current) {
                      handleSearch(inputRef.current.value);
                    }
                  }}
                />
              </div>
              <div className="content">
                <img src={weatherData.icon} alt="clearicon" />
                <p className="temperature">{weatherData.temperature} độ C</p>
                <p className="location">{weatherData.location}</p>
              </div>
              <div className="weather-data">
                <div className="col">
                  <img src={humidityIcon} alt="" />
                  <div>
                    <p className="day">{weatherData.humidity} %</p>
                    <p className="temp">HUMIDIT</p>
                  </div>
                </div>
                <div className="col">
                  <img src={windIcon} alt="" />
                  <div>
                    <p className="day">{weatherData.windspeed} km/h</p>
                    <p className="temp">WINDSPEED</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </div>
    </>
  );
}

export default Weather;
