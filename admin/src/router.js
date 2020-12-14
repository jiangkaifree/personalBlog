/*
 * @Author: jk
 * @Date: 2020-12-14 11:15:30
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-14 16:55:40
 */
import { Route, Switch } from "react-router-dom";


import Data from "./views/Data/Data";     // 数据添加页面
import AddArticle from "./views/AddArticle/AddArticle";   // 添加文章页面
import ArticlesList from "./views/ArticlesList/ArticlesList";   // 文章列表页面
import Chat from "./views/Chat/Chat";   // 理由列表页面
const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/admin/addArticle" component={AddArticle}></Route> */}
      <Route exact path="/admin/data" component={Data}></Route>
      <Route exact path='/admin/chat' component={Chat} />
      <Route exact path='/admin/articlesList' component={ArticlesList} />
    </Switch>
  );
};
export default Routes;
