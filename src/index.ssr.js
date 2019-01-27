import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';

import App from './app.js';
import AppTemplate from './app.template.js';

if (typeof global.document !== 'undefined') {
  const path = window.location.pathname+window.location.search;
  ReactDOM.render(<App path={path} isBrowser={true}/>, document.getElementById('root'))
}

export default (locals, callback) => {
  const app = renderToString(React.createElement(AppTemplate, locals));
  callback(null, ' <!DOCTYPE html>' + app)
}
