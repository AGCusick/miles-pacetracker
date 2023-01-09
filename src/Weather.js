import React from 'react';
import { useState, useEffect } from 'react';
import './css/weather.css';
import axios from 'axios';


const Weather = () => {
      const [display, setDisplay] = useState(true);
      const [lat, setLat] = useState(0);
      const [long, setLong] = useState(0);
      const [temp, setTemp] = useState(0);

      const [wind, setWind] = useState('');
      const [windDir, setWindDir] = useState('');
      const [gust, setGust] = useState('');
      const [precip, setPrecip] = useState(0);

      const [metricTemp, setMetricTemp] = useState('');
      const [metricWind, setMetricWind] = useState('');
      const [metricWindDir, setMetricWindDir] = useState('');
      const [metricGust, setMetricGust] = useState('');
      const [metricPrecip, setMetricPrecip] = useState(0);

      const [icon, setIcon] = useState('');
      const [city, setCity] = useState('');




      const getWeather = async () => {
            await navigator.geolocation.getCurrentPosition((position) => {
                  setLat(position.coords.latitude);
                  setLong(position.coords.longitude);
            })
            try {

                  const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=6e6263afb84f44279f731543222510&q=${lat},${long}&aqi=no`);

                  console.log(response.data)
                  //standard
                  setCity(response.data.location.name)
                  setTemp(response.data.current.temp_f);
                  setWind(response.data.current.wind_mph);
                  setWindDir(response.data.current.wind_dir);
                  setGust(response.data.current.gust_mph);
                  setPrecip(response.data.current.precip_in);
                  const pic = response.data.current.condition.icon.slice(-7);

                  //metric
                  setMetricTemp(response.data.current.temp_c);
                  setMetricWind(response.data.current.wind_kph);
                  setMetricWindDir(response.data.current.wind_dir);
                  setMetricGust(response.data.current.gust_kph);
                  setMetricPrecip(response.data.current.precip_mm);
                  if (response.data.current.condition.icon.includes('day')) {
                        setIcon(<img src={`./assets/weather/64x64/day/${pic}`}></img>
                        )
                  } else {
                        setIcon(<img src={`./assets/weather/64x64/night/${pic}`}></img>)

                  }

            } catch (err) {
                  console.error(err)
            }


      }

      useEffect(() => {
            getWeather();

      }, [lat]);

      const handleClick = () => {
            if (display === true) {
                  setDisplay(false)
            } else if (display === false) {
                  setDisplay(true)
            }
      }


      const ShowStandard = () => {
            return (
                  <div>
                        <p className='icon'>{icon}</p>
                        <h2>{city}</h2>
                        <p>{`Current Temp: ${Math.round(temp)} °F`}</p>
                        <p>{`Wind: ${windDir} ${Math.round(wind)} mph Gusts: ${Math.round(gust)} mph`}</p>
                        <p>{`Precip: ${precip}in`}</p>
                        <button className='toggle-corf' onClick={handleClick}>Metric</button>
                  </div>
            )
      }

      const ShowMetric = () => {

            return (
                  <div>
                        <div className='icon'>
                              <p className='icon'>{icon}</p>
                        </div>
                        <h2>{city}</h2>
                        <p>{`Current Temp: ${Math.round(metricTemp)} °C`}</p>
                        <p>{`Wind: ${metricWindDir} ${Math.round(metricWind)} kph Gusts: ${Math.round(metricGust)} kph`}</p>
                        <p>{`Precip: ${Math.round(metricPrecip)}mm`}</p>
                        <button className='toggle-corf' onClick={handleClick}>Standard</button>
                  </div>
            )

      }

      const StandardOrMetric = () => {
            if (display === false) {
                  return (
                        <div>
                              <ShowMetric />
                        </div>
                  )
            } else {
                  return (
                        <div>
                              <ShowStandard />
                        </div>
                  )
            }
      }





      return (
            <div className='weather-container'>
                  <StandardOrMetric />
                  <div className='api-link-back'>
                        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
                              alt="Weather data by WeatherAPI.com" border="0" /></a>

                  </div>
            </div>



      )

}



export default Weather;