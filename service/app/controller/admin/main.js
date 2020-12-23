const Controller = require('egg').Controller

class MainController extends Controller{
    /**
     * 用户登录
     * @param(String) userName 用户名
     * @param(Number) password 密码
     */
    async login(){
        const {ctx,app} = this
        let userName = ctx.request.body.userName
        let password = ctx.request.body.password
        const sql = `SELECT userName FROM admin_user WHERE userName =${userName} AND password = ${password}`
        const res = await app.mysql.query(sql)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId=new Date().getTime()
            ctx.session.openId={ 'openId':openId }
            ctx.body={
                code: 1,
                data: {
                    openId
                }
            }

        }else{
            ctx.body={
                code: 0,
                data: {
                    title: '登录失败',
                    message: '用户名或密码错误'
                }
            }
        } 
    }

    /**
     * 获取文章分类
     * 
     */
    async getArticleType(){
        const {ctx,app} = this
        const result = await app.mysql.select("blog_type")
        ctx.body = {
            code: 1,
            data: result
        }
    }

    /**
     * 发布文章
     * @param(String) title 文章标题
     * @param(String) desc 文章简介
     * @param(String) content 文章内容
     * @param(Array) type 文章类型
     * @param(String) date 文章日期
     * @param(String) order 文章排序
     */
    async postArticle(){
        const {ctx,app} = this
    }

    async index(){
        //首页的文章列表数据
        this.ctx.body='hi api'
        
    }

}

module.exports = MainController
