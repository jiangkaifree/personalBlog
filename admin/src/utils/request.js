/*
 * @Author: jk
 * @Date: 2020-12-16 19:08:00
 * @Last Modified by: jk
 * @Last Modified time: 2021-01-27 19:32:46
 */
/**
 * 导入axios
 */
import axios from "axios";
// import {useHistory} from 'react-router-dom'
import { notification } from "antd";

/**路由跳转 */
// const history = useHistory()

/** 创建axios实例 */
axios.defaults.timeout = 3000; // 请求超时
axios.defaults.baseURL = process.env.REACT_APP_BASEURL; // 请求根地址
axios.defaults.withCredentials = true;        // 表示跨域请求时是否需要使用凭证

// request请求拦截器
axios.interceptors.request.use(
  (config) => {
    // config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response响应拦截器
axios.interceptors.response.use(
  (res) => {
    console.log(res, "axios");

    // 请求成功但不能操作
    if (res.data.code === 0) {
      /**弹出操作错误信息 */
      notification.error({
        message: res.data.data.title,
        description: res.data.data.message,
      });
      return
    } else {
      // 返回请求结果
      return res.data;
    }
  },
  (error) => {
    console.log(error,'err')
    const { status } = error.response
    // 请求失败
    switch (status) {
      case 400:
        error.message = "错误请求";
        break;
      case 401:
        error.message = "未授权，请重新登录";
        break;
      case 403:
        error.message = "拒绝访问";
        break;
      case 404:
        error.message = "请求错误,未找到该资源";
        window.location.href = "/NotFound";
        break;
      case 405:
        error.message = "请求方法未允许";
        break;
      case 408:
        error.message = "请求超时";
        break;
      case 500:
        error.message = "服务器端出错";
        break;
      case 501:
        error.message = "网络未实现";
        break;
      case 502:
        error.message = "网络错误";
        break;
      case 503:
        error.message = "服务不可用";
        break;
      case 504:
        error.message = "网络超时";
        break;
      case 505:
        error.message = "http版本不支持该请求";
        break;
      default:
        error.message = `连接错误${error.response.status}`;
    }
    // 请求失败提醒
    notification.error({
      message: "请求失败",
      description: error.message,
      onClose: ()=>{
        // history.replace('/r')
      }
    });
  }
);

/**
 * 封装post请求
 * @param(String) url 请求地址
 * @param(Object) data  请求数据
 */

export const post = async (url, data) => {
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
    const res = await axios.post(url, data);
    // console.log(res)
    if (res)
      return res.data;
};


// 封装get请求
export const get =  async (url) => {
    const res = await axios.get(url,{});
    if (res)
      return res.data;
}
