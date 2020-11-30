import React from 'react';
import ReactDOM from 'react-dom';
// 全局导入antd
import 'antd/dist/antd.css';
// 导入路由配置
import Router from './router'
// 样式重置css
import "./assets/css/reset.css"
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router></Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
