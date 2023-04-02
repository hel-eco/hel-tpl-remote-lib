const helDevUtils = require('hel-dev-utils');
const pkg = require('../package.json');

// const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg' });
const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg', homePage: 'http://127.0.0.1' });

// 自定义 homePage，形如：https://youhost.com/aa/bb、 /aa/bb、../aa/bb
// const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg', homePage: './xx' });

// 自定义 homePage，不拼接名字和版本号
// const subApp = helDevUtils.createLibSubApp(pkg, { npmCdnType: 'unpkg', homePage: './xx', handleHomePage: false });

module.exports = subApp;
