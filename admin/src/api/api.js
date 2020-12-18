// 导入封装好的请求
import { post } from '../utils/request'

export const userLoginApi = async (data) => {
    console.log(post,'post')
    const res = await post('admin/login', data)
    // const res = await post('admin/index', data)
    return res.data
  }