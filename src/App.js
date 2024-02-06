import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=df4bece2f38395324777e7cb43f34748`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location' 
          type='text'/>
      </div>
      <div className="container">
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            <h1>{Math.round(data.main.temp-273.15)}°C</h1>
          </div>
          <div className='description'>
            <p>{data.weather[0].main}</p>
          </div>
        </div>

        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>{Math.round(data.main.feels_like-273.15)}°C</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>{Math.round(data.wind.speed*1.60934)} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
