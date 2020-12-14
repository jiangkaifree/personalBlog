import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 全局导入antd
import "antd/dist/antd.css";
// 导入路由配置
// import Router from './router'
// 样式重置css
import "./assets/css/reset.css";

import {  BrowserRouter as Router, } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
     <Router>
      <App />
    </Router>
  // </React.StrictMode>
  ,
  document.getElementById("root")
);
