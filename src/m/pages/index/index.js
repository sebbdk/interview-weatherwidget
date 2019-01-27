import React, { Component } from 'react';

import styles from './index.css';

import WeatherWidget from '../../components/weather-widget/index.js';

function getStyles(styles) {
  return typeof styles === 'object' ? '' : <style type="text/css">{styles}</style>;
}

export class Index extends Component {
  render() {
    return (
      <div>
        {getStyles(styles)}
        <WeatherWidget></WeatherWidget>
      </div>
    );
  }
}

export default Index;