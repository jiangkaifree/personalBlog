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
        console.log(res)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId=new Date().getTime()
            ctx.session.openId={ 'openId':openId }
            ctx.body={'data':'登录成功','openId':openId}

        }else{
            ctx.body={
                code: 0,
                data:'登录失败'
            }
        } 
    }

    async index(){
        //首页的文章列表数据
        this.ctx.body='hi api'
        
    }

}

module.exports = MainController
