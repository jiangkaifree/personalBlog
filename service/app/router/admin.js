module.exports = (app) => {
  const { router, controller } = app;
  const loginAuth = app.middleware.loginAuth()
  router.get("/admin/index",loginAuth, controller.admin.main.index);    // 测试接口
//   router.post("/admin/login", controller.admin.main.checkLogin);
  router.post("/admin/login", controller.admin.main.login);     // 登录接口
  router.get("/admin/articleType", controller.admin.main.getArticleType);     // 获取文章类别接口
  router.post("/admin/postArticle", controller.admin.main.postArticle);     // 发布文章
  
  
};
