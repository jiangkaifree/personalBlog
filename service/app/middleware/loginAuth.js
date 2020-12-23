module.exports = options =>{
    return  async(ctx,next) =>{
        console.log(ctx.session.openId)
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={
                code: 0,
                data: {
                    message: '没有登录'
                }
            }
        }
    }
}