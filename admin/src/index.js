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
  <Router>
     

  </Router>,
  document.getElementById('root')
);


