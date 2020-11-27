'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx ,app} = this;
    const result = await app.mysql.get("blog_content",{})
    console.log(this)
    ctx.body = result;
  }
}

module.exports = HomeController;
