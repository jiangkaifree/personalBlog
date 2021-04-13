'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// 配置cors跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 配置egg-mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
