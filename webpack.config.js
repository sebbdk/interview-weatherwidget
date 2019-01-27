/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-23 19:50:27
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-13 18:16:56
*/
const devConfig = require('./build/webpack.dev.js');
const staticConfig = require('./build/webpack.static.js');

module.exports = (env, argv) => {
  return argv.mode === 'production' ? staticConfig(env, argv) : devConfig(env, argv);
}