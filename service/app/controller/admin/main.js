const Controller = require("egg").Controller;

class MainController extends Controller {
  /**
   * 用户登录
   * @param(String) userName 用户名
   * @param(Number) password 密码
   */
  async login() {
    const { ctx, app } = this;
    let userName = ctx.request.body.userName;
    let password = ctx.request.body.password;
    const sql = `SELECT userName FROM admin_user WHERE userName =${userName} AND password = ${password}`;
    const res = await app.mysql.query(sql);
    if (res.length > 0) {
      //登录成功,进行session缓存
      let openId = new Date().getTime();
      ctx.session.openId = { openId: openId };
      ctx.body = {
        code: 1,
        data: {
          openId,
        },
      };
    } else {
      ctx.body = {
        code: 0,
        data: {
          title: "登录失败",
          message: "用户名或密码错误",
        },
      };
    }
  }

  /**
   * 获取文章分类
   *
   */
  async getArticleType() {
    const { ctx, app } = this;
    const data = await app.mysql.select("article_type");
    ctx.body = {
      code: 1,
      data,
    };
  }

  /**
   * 发布编辑文章
   * @param(String) title 文章标题
   * @param(String) desc 文章简介
   * @param(String) content 文章内容
   * @param(Array) type 文章类型
   * @param(String) date 文章日期
   * @param(String) order 文章排序
   */
  async postArticle() {
    const { ctx, app } = this;
    let articleInfo = ctx.request.body;
    console.log(articleInfo.articleId);
    if (articleInfo.articleId) {
      // articleId存在则是修改编辑
      const result = await app.mysql.update("article_info", articleInfo, {
        where: { articleId: articleInfo.articleId },
      });
      console.log(result, "gx");
      ctx.body = {
        code: result.affectedRows === 1 ? 1 : 0,
        data: {
          message: result.affectedRows === 1 ? "修改成功" : "修改失败",
        },
      };
      return;
    } else {
      articleInfo.articleId = new Date().getTime(); // 生成文章id
      const result = await app.mysql.insert("article_info", articleInfo);
      console.log(result, articleInfo.articleId, "fab");
      ctx.body = {
        code: result.affectedRows === 1 ? 1 : 0,
        data: {
          message: result.affectedRows === 1 ? "发布成功" : "发布失败",
        },
      };
      return;
    }
  }

  //获得文章列表
  async getArticleList() {
    let sql = `SELECT articleTitle,articleId,articleType,articleDate,articleTags,viewCount FROM article_info`;
    const data = await this.app.mysql.query(sql);
    // 处理数据
    for (let item of data) {
      item.articleTags = JSON.parse(item.articleTags);
    }
    this.ctx.body = {
      code: 1,
      data,
    };
  }

  //删除文章
  async delArticle() {
    let articleId = this.ctx.params.id;
    const result = await this.app.mysql.delete("article_info", { articleId });
    // console.log(result);
    this.ctx.body = {
      code: 1,
      data: {
        code: result.fieldCount === 0? 1:0,
        message: result.fieldCount === 0? '删除成功': '删除失败'
      },
    };
  }

  //根据文章ID得到文章详情，用于修改文章
  async getArticleById() {
    let id = this.ctx.params.id;
    const result = await this.app.mysql.query(
      `SELECT articleContent,articleTitle,articleDesc,articleId,articleType,articleDate,articleTags FROM article_info WHERE articleId=${id}`
    );
    // 处理数据
    for (let item of result) {
      item.articleTags = JSON.parse(item.articleTags);
    }
    this.ctx.body = { 
      code: 1,
      data: result
     };
  }

  /**测试 */
  async index() {
    //首页的文章列表数据
    this.ctx.body = "hi api";
  }
}

module.exports = MainController;
