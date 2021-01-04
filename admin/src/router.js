/*
 * @Author: jk
 * @Date: 2020-12-14 11:15:30
 * @Last Modified by: jk
 * @Last Modified time: 2021-01-04 16:37:25
 */
import {lazy} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Data from "./views/Data/Data"; // 数据添加页面
// const Data = lazy(()=> import("./views/Data/Data"));
import ArticlesList from "./views/ArticlesList/ArticlesList"; // 文章列表页面
import Chat from "./views/Chat/Chat"; // 理由列表页面
// import ResultPage from "./views/ResultPage/ResultPage";
const Routes = (props) => {
  return (
    <Switch>
      {/* <Route exact path="/admin/addArticle" component={AddArticle}></Route> */}

      <Route exact path="/admin/data" component={Data}></Route>
      <Route exact path="/admin/chat" component={Chat} />
      <Route exact path="/admin/articlesList" component={ArticlesList} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};



export default Routes;
