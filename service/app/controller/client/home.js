'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * TODO 获取首页列表
   */
  async index() {
    const { ctx ,app} = this;
    // const result = await app.mysql.get("blog_content",{})
    let sql = `SELECT articleTitle,articleId,articleType,articleDate,articleTags FROM article_info ORDER BY articleId limit 4`;
    const data = await app.mysql.query(sql);
    // 处理数据
    for (let item of data) {
      item.articleTags = JSON.parse(item.articleTags);
    }
    ctx.body = {
      code: 1,
      data,
    };
  }

  /**
   * TODO 获取BLOG列表数据
   */
  async blogList() {
    const { ctx ,app} = this;
    // const result = await app.mysql.get("blog_content",{})
    let sql = `SELECT articleTitle,articleId,articleType,articleDate,articleTags,articleDesc FROM article_info ORDER BY articleId limit 6`;
    const data = await app.mysql.query(sql);
    // 处理数据
    for (let item of data) {
      item.articleTags = JSON.parse(item.articleTags);
    }
    ctx.body = {
      code: 1,
      data,
    };
  }
  
}

module.exports = HomeController;
