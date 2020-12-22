module.exports = (app) => {
  const { router, controller } = app;
  router.get("/admin/index", controller.admin.main.index);
//   router.post("/admin/login", controller.admin.main.checkLogin);
  router.post("/admin/login", controller.admin.main.login);
};
