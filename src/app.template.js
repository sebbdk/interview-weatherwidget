import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app';
import styles from './app.css';

export default class AppTemplate extends Component {
  render() {
    const assets = Object.keys(this.props.webpackStats.compilation.assets)
    const js = assets.filter(value => value.match(/\.js$/))
    const css = assets.filter(value => value.match(/\.css$/))

    const jsScript = js.reduce((name, val) => (<script async src={val}></script>), '');
    const cssLink = css.reduce((name, val) => (<link rel="stylesheet" href={val} />), '');

    return (
      <html lang="en">
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="Description" content="Weather app!" />
          <title>Weather app</title>
          {cssLink}

          <style type="text/css">{styles}</style>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      </head>
      <body>
        <div id="root">
          <App path={this.props.path}></App>
        </div>

        {jsScript}
      </body>
      </html>
    );
  }
}
