// 导入封装好的请求
import { post } from '../utils/request'

export const userLoginApi = async (data) => {
    const res = await post('admin/login', data)
    return res
  }