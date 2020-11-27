'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  require('./router/client')(app)
  
  // const { router, controller } = app;
  // router.get('/', controller.home.list);
};
