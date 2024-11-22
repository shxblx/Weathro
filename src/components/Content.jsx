import { LoadingOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../Context";

const Content = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isCelsius, setIsCelsius] = useState(true);
  const { searchText } = useContext(SearchContext);
  const city = searchText ? searchText : "kerala";

  const handleChange = () => {
    setIsCelsius(!isCelsius);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, [API_KEY, city]);

  // if (weatherData) {
  //   console.log(weatherData);
  // }
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
              <p className="text-[#3d52a0] font-bold text-4xl ">
                {weatherData.name}
              </p>
              <div className="flex space-x-1 mt-2">
                {isCelsius ? (
                  <p className="text-[#3d52a0] text-3xl">
                    {" "}
                    {kelvinToCelsius(weatherData.main.temp)}
                  </p>
                ) : (
                  <p className="text-[#3d52a0] text-3xl">
                    {kelvinToFahrenheit(weatherData.main.temp)}
                  </p>
                )}
                <button
                  onClick={handleChange}
                  className="text-white rounded-lg px-2 text-2xl bg-[#3d52a0] hover:cursor-pointer"
                >
                  {isCelsius ? "°C" : "°F"}
                </button>
              </div>

              <p className="text-[#3d52a0] text-3xl ">
                {weatherData.weather[0].main}
              </p>

              <p className="text-[#3d52a0] ">
                {weatherData.weather[0].description}
              </p>

              <p className="text-[#3d52a0]">
                Feels Like: {kelvinToCelsius(weatherData.main.feels_like)}°C /{" "}
                {kelvinToFahrenheit(weatherData.main.feels_like)}°F
              </p>
              <p className="text-[#3d52a0] ">
                Ground Level Pressure: {weatherData.main.grnd_level} hPa{" "}
              </p>

              <p className="text-[#3d52a0] ">
                Wind Speed: {weatherData.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-[600px] justify-center  space-x-4 text-[#3d52a0] text-3xl">
          <p>Loading</p>
          <LoadingOutlined />
        </div>
      )}
    </>
  );
};

export default Content;
