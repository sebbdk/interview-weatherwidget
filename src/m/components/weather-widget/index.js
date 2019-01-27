import React, { Component } from 'react';
import updateURLParameter from './update-url-param';

function updateUrlCityParam(city = '') {
  window.history.replaceState('', '', updateURLParameter(window.location.href, "city", city));
}

function getWeather(city = 'Copenhagen') {
  const apiKey = '166d00e26d3ff2c6149e89feccc5c59a';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${apiKey}`;

  return new Promise((a, r) => {
    fetch(url).then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        a(myJson);
      }).catch(err => {
        console.error('handle me please...', err);
      });
  });
}

function degreeToCardinalDirection(deg = 0) {
  return deg.toString();
}

export class WeatherWidget extends Component {
  componentDidMount() {
    const url = new URL(window.location.href);
    const city = url.searchParams.get("city") || 'copenhagen';

    this.updateWeather(city);
  }

  updateWeather(city = 'copenhagen') {
    getWeather(city).then((resp) => {
      if (resp.cod === 200) {
        updateUrlCityParam(resp.name);

        this.setState({
          city: resp.name,
          temperature: Math.round(resp.main.temp - 272.15) + '°C',
          humidity: resp.main.humidity,
          wind: `${resp.wind.speed} m/s ${degreeToCardinalDirection(resp.wind.deg)}`,
          found: true
        });
      } else {
        updateUrlCityParam(city);

        this.setState({
          city: 'City not found :(',
          temperature: 'N/A',
          humidity: 'N/A',
          wind: 'N/A',
          found: false
        });
      }
    });
  }

  submit(e){
    e.preventDefault();
    const city = this.state.cityInput ? this.state.cityInput : 'Copenhagen';
    this.updateWeather(city);
  }

  onInputChange(evt) {
    this.setState({
      cityInput: evt.target.value
    });
  }

  render() {
    return (
      <div class="widget" style="margin: 10px auto; width: 300px;">
        <div class="panel panel-info">
          <div class="panel-heading">Weather in <b>{this.state.city}</b></div>
          <ul class="list-group">
            <li class="list-group-item">Temperature: <b>{this.state.temperature}</b></li>
            <li class="list-group-item">Humidity: <b>{this.state.humidity}</b></li>
            <li class="list-group-item">Wind: <b>{this.state.wind}</b></li>
            <li class="list-group-item">
                <form class="form-inline" onSubmit={this.submit.bind(this)} method="GET">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                      onChange={this.onInputChange.bind(this)}
                      placeholder="City" />
                  </div>
                  <button type="submit"  class="btn btn-default">Search</button>
                </form>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WeatherWidget;