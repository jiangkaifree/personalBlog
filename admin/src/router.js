/* * @Author: undefined  * @Date: 2020-11-30 15:33:38  * @Last Modified by:   jk  * @Last Modified time: 2020-11-30 15:33:38  */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 登录页面
import Login from './views/Login/Login'

// 首页
import Home from "./views/Home/Home";

export default ()=> {
   return (
      <Router>
         
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          {/* <Route path="/list" component={List} /> */}
      </Router>
    );
}