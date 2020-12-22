/*
 * @Author: jk
 * @Date: 2020-12-16 19:08:00
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-18 14:08:23
 */
/**
 * 导入axios
 */
import axios from "axios";
import { notification} from 'antd'

  /** 创建axios实例 */

axios.defaults.timeout = 3000; // 请求超时
axios.defaults.baseURL = "http://127.0.0.1:7001"; // 请求根地址

// request请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    // config.headers.x-auth-token = "a7d5e2660c064f85aea0632eeddce0cb"
    config.headers["x-auth-token"] = "a7d5e2660c064f85aea0632eeddce0cb"
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response响应拦截器
axios.interceptors.response.use(
  (res) => {
    console.log(res, 'res')
    
    
    // 请求成功但有code
    if (res.data.code === 0) {
      // console.log("过期");
    
      notification.error({
        message: '操作失败',
        description: res.data.data,
      });
      return
    }else {
    return res.data
    }
  },
  (error) => {
    // 请求失败
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
    // 请求失败提醒
    notification.error({
      message: '请求失败',
      description: error.message,
    });

  }
);


// 封装post请求
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export const post=(url, data) => {
  // return new Promise((resolve, reject) => {
  //   axios.post(url, data).then(
  //     (res) => {
  //       resolve(res.data);
  //     },
  //     (err) => {
  //       reject(err);
  //     }
  //   );
  // });
  return  axios.post(url, data).then(
        (res) => {
          // resolve(res.data);
          return res.data
        },
        (err) => {
          // reject(err);
          return err
        }
      );
}

