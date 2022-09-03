const helDevUtils = require('hel-dev-utils');
const pkg = require('../package.json');

const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg' });
subApp.homePage = '/';

console.log(subApp.homePage);

module.exports = subApp;
