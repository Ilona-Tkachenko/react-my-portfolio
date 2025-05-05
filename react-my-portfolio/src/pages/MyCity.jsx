import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyCity.css';
import mycity from '../img/mycity.png'; 
import mycity1 from '../img/mycity1.png';


function MyCity() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const city = 'Cherkasy';
        const apiKey = 'fff5c2391990069fd02a129335d51220';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

        const response = await axios.get(url);
        setWeather(response.data);
      } catch (err) {
        setError('Не вдалося завантажити погоду.');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="my-city">
      <h1>Моє місто — Черкаси</h1>

      <div className="city-images">
  <img src={mycity} alt="My City" className="city-image" />
  <img src={mycity1} alt="My City Alternate" className="city-image" />
</div>


      <div className="city-description">
  <p>
    Черкаси — чарівне місто на березі Дніпра, серце Центральної України. Тут поєднуються затишок, природа й дух козацької історії.
    Місто приваблює своїми зеленими набережними, творчою молоддю та спокійною атмосферою для життя.
    <br /><br />
    Сучасні Черкаси — це культурний, економічний і освітній центр області. Місцева громада активно розвиває міське середовище, зберігаючи при цьому повагу до історії та традицій.
  </p>
</div>
      {error && <p className="error">{error}</p>}

      {weather ? (
        <div className="weather-block">
          <h2>Поточна погода</h2>
          <p><strong>Температура:</strong> {weather.main.temp}°C</p>
          <p><strong>Опис:</strong> {weather.weather[0].description}</p>
          <p><strong>Координати:</strong> {weather.coord.lat}, {weather.coord.lon}</p>
          <p><strong>Місто:</strong> {weather.name}</p>
          <p><strong>Країна:</strong> {weather.sys.country}</p>
        </div>
      ) : (
        <p>Завантаження даних...</p>
      )}
    </div>
  );
}

export default MyCity;
