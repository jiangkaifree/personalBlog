'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/client/index', controller.client.home.index);    //   首页获取文章列表
  router.get('/client/blogList',controller.client.home.blogList)      //  BLOG列表
  router.get('/client/blogInfo/:id',controller.client.home.blogInfo)      //  BLOG详情信息
  
};
