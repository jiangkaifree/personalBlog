"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  /**
   * TODO 获取首页列表
   */
  async index() {
    const { ctx, app } = this;
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
    const { ctx, app } = this;
    // 获取页数索引
    console.log(ctx)
    const { pageIndex } = ctx.query;
    let sql = `SELECT articleTitle,articleId,articleType,articleDate,articleTags,articleDesc FROM article_info ORDER BY articleId limit ${pageIndex},6`;
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
   * TODO 获取BLOG详情
   * @param{Number | String} blogId 博客的Id
   */
  async blogInfo() {
    const { ctx, app } = this;
    console.log(ctx.params.id);
    const id = ctx.params.id;
    const data = await app.mysql.query(
      `SELECT articleTitle,articleId,articleType,articleDate,articleTags,articleContent FROM article_info WHERE articleId= ${id}`
    );
    console.log(data);
    // 处理数据
    for (let item of data) {
      item.articleTags = JSON.parse(item.articleTags);
    }
    ctx.body = {
      code: 1,
      data: data[0],
    };
  }
}

module.exports = HomeController;
