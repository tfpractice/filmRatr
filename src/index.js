// const path = require('path');
//
// console.log('process.cwd', process.cwd());
// console.log('dirname', __dirname);
require('babel-core/register')({});
require('babel-polyfill');
require('./server');

// console.log('APP', app);
