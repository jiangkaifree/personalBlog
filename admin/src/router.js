/*
 * @Author: jk
 * @Date: 2020-12-14 11:15:30
 * @Last Modified by: 小菜鸡
 * @Last Modified time: 2020-12-24 17:33:21
 */
import React from 'react'
import { Route, Switch, } from "react-router-dom";

import Data from "./views/Data/Data";     // 数据添加页面
import ArticlesList from "./views/ArticlesList/ArticlesList";   // 文章列表页面
import Chat from "./views/Chat/Chat";   // 理由列表页面
import NotFoundPage from "./views/NotFound/NotFound";
const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/admin/addArticle" component={AddArticle}></Route> */}
      
      <Route exact path="/admin/data" component={Data} ></Route>
      <Route exact path='/admin/chat' component={Chat} />
      <Route exact path='/admin/articlesList' component={ArticlesList}  />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};
export default React.forwardRef(Routes);
