/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // config.session = {
  //   key: 'openId'
  // }
  // 跨越配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:3000', 'http://localhost:3001' ], // []中放放出的白名单，*代表所有
  };
  config.cors = {
    // origin:'http://localhost:3000',
    credentials: true, // 允许Cook可以跨域
    // AccessControlAllowCredentials: true,
    // AccessControlAllowOrigin: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606372857132_9984';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // user: "admin",
      // password
      password: '123456',
      // database
      database: 'blog_test',
    },
    // load into app, default is open
  };

  return {
    ...config,
    ...userConfig,
  };
};
