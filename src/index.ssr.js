/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-24 20:31:59
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-26 20:57:14
*
* Server side render entry
*/
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
