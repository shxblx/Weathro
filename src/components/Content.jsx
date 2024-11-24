import { LoadingOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../Context";

const Content = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isCelsius, setIsCelsius] = useState(true);
  const { searchText } = useContext(SearchContext);
  const city = searchText ? searchText : "New York";
  if (!weatherData) {
  }

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const handleChange = () => {
    setIsCelsius(!isCelsius);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        let url;
        if (coordinates.latitude && coordinates.longitude) {
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`;
        } else {
          url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [API_KEY, city, coordinates]);

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const kelvinToFahrenheit = (kelvin) =>
    (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);

  return (
    <>
      {weatherData ? (
        <div className="flex mt-[70px] items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png
`}
                className=" wh-96"
                alt={weatherData.weather[0].description}
              />
            </div>
            <div className="pl-3">
              <p className="text-[#3d52a0] text-3xl font-bold md:text-4xl ">
                {weatherData.name}
              </p>
              <div className="flex space-x-1 mt-2">
                {isCelsius ? (
                  <p className="text-[#3d52a0] text-2xl md:text-3xl">
                    {" "}
                    {kelvinToCelsius(weatherData.main.temp)}
                  </p>
                ) : (
                  <p className="text-[#3d52a0] text-2xl md:text-3xl">
                    {kelvinToFahrenheit(weatherData.main.temp)}
                  </p>
                )}
                <button
                  onClick={handleChange}
                  className="text-white rounded-lg px-2 md:text-2xl bg-[#3d52a0] hover:cursor-pointer"
                >
                  {isCelsius ? "°C" : "°F"}
                </button>
              </div>

              <p className="text-[#3d52a0] md:text-3xl ">
                {weatherData.weather[0].main}
              </p>

              <p className="text-[#3d52a0] text-sm">
                Feels Like: {kelvinToCelsius(weatherData.main.feels_like)}°C /{" "}
                {kelvinToFahrenheit(weatherData.main.feels_like)}°F
              </p>
              <p className="text-[#3d52a0] text-xs">
                Ground Level Pressure: {weatherData.main.grnd_level} hPa{" "}
              </p>

              <p className="text-[#3d52a0] text-xs">
                Wind Speed: {weatherData.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-[600px] justify-center space-x-4 text-[#3d52a0] md:text-3xl">
          <p>Loading</p>
          <LoadingOutlined />
        </div>
      )}
    </>
  );
};

export default Content;
