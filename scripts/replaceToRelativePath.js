/*
|--------------------------------------------------------------------------
|
| convert absolute path based baseUrl to relative path
|
| 配合 npm run build_types 命令执行的脚本
| 用于将所有的绝对引用路径转为相对应用路径
| 例如：import { isSubApp } from 'services/appEnv';
| 将转为：import { isSubApp } from '../../services/appEnv';
| 这样被别的项目引用时才能正确的导出整个项目的推导类型
|--------------------------------------------------------------------------
*/
const replacer = require('replace-absolute-path');
const path = require('path');

(async function () {
  const srcDir = process.env.BUNDLE === 'true' ? path.resolve(__dirname, '../lib-js') : path.resolve(__dirname, '../src');
  const libDir = process.env.BUNDLE === 'true' ? path.resolve(__dirname, '../lib-js') : path.resolve(__dirname, '../lib');
  const strList = libDir.split('/');
  const libDirShortName = strList[strList.length - 1];

  await replacer({
    inputDir: srcDir,
    outputDir: libDir,
    afterReplaced() {
      console.log('----------------------------------------------------------------------------------');
      console.log(`| all files import statements been transformed to relative path for ${libDirShortName} ^_^!`);
      console.log('----------------------------------------------------------------------------------');
    },
  });
})()


// console.log(getAllFilePath(path.resolve(__dirname, './src')))
