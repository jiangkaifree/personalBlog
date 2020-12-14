/*
 * @Author: jk
 * @Date: 2020-12-14 10:57:56
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-14 17:31:03
 */

import { useState } from "react";
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  // withRouter
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  EditOutlined,
  AudioOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
  OrderedListOutlined,
  HomeOutlined
} from "@ant-design/icons";
import styles from "./App.module.scss";
import Routes from './router'
// 登录页面
import Login from "./views/Login/Login";
import AddArticle from "./views/AddArticle/AddArticle";   // 添加文章页面

// import Data from "./views/Data/Data";
// import AddArticle from "./views/AddArticle/AddArticle";

function App() {
  const { Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(["data"]);
  const history = useHistory();

  // 跳转页面
  const setPage = (key)=> {
    history.push(key);
    setActiveItem([key])
  }

  return (
    <div className={styles.App}>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
      <Route exact path="/admin/addArticle" component={AddArticle}></Route>
          <Redirect to="/login" from="/" exact></Redirect>
          <Redirect to="/admin/data" from="/admin" exact></Redirect>
          <Route path="/admin">
            <Layout className={styles.layoutWrap}>
              <Sider
              theme='light'
                collapsible
                collapsed={collapsed}
                onCollapse={(collapsed) => setCollapsed(collapsed)}
                className={styles.siderWrap}
              >
                <div className={styles.avatarWrap}>
                  <Avatar size={48} icon={<UserOutlined />} />
                  <p className={styles.date}>上午好! 江凯</p>
                  <p className={styles.date}>2020/02/02</p>
                </div>
                <Menu
                  theme="light"
                  defaultSelectedKeys={activeItem}
                  mode="inline"
                  onClick={({ key }) => setPage(key)}
                >
                  <Menu.Item key="data">
                   
                    <PieChartOutlined />
                    <span>实时数据</span>
                  </Menu.Item>
                  
                  <SubMenu
                    title={
                      <span>
                        {/* <Icon type="user" /> */}
                        <SettingOutlined />
                        <span>文章管理</span>
                      </span>
                    }
                  >
                    <Menu.Item key="addArticle"> <EditOutlined />添加文章</Menu.Item>
                  
                    <Menu.Item key="articlesList"><OrderedListOutlined />文章列表</Menu.Item>
                  </SubMenu>

                  <Menu.Item key="chat">
                    <AudioOutlined />
                    <span>留言管理</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                <Content className={styles.contentWrap}>
                  <Breadcrumb className={styles.headerWrap}>
                    <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                    <Breadcrumb.Item>工作台</Breadcrumb.Item>
                  </Breadcrumb>
                  <div className={styles.content}>
                    <Routes></Routes>
                  </div>
                </Content>
                <Footer className={styles.footer}>
                  BLOG 后台管理 By 2020
                </Footer>
              </Layout>
            </Layout>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
