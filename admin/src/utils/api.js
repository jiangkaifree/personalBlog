// 导入封装好的请求
import { post } from './request'

export const getArticleList = (data) => {
    console.log(post,'post')
    return post('gym/v1/getMemberHome',data).then((res) => {
        return res.data
    })
  }