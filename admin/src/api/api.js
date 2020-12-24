// 导入封装好的请求
import { post,get } from '../utils/request'

/**
 * 登录接口
 */
export const userLoginApi = async (data) => {
    const res = await post('admin/login', data)
    return res
  }

/** 获取文章类别接口 */
export const articleTypeApi = async () => {
  const res = await get('admin/articleType')
  return res
}

/**
 * 发布文章接口
 */
export const postArticleApi = async (data)=> {
  const res = await post('admin/postArticle',data)
  return res
}

/**
 * 暂存文章接口
 */
export const saveArticleApi = async (data)=> {
  const res = await post('admin/saveArticle',data)
  return res
}