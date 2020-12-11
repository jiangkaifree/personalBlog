/*
 * @Author: jk
 * @Date: 2020-12-11 14:15:17
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-11 18:08:53
 */
import React, { useState  } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  EditOutlined,
  AudioOutlined,
  DatabaseOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./views/Home/Home.module.scss";

// 登录页面
import Login from "./views/Login/Login";
// 首页
import AddArticle from "./views/AddArticle/AddArticle";
import Data from "./views/Data/Data";


const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default () => {
  const [collapsed, setCollapsed] = useState(false);


//   const [page,setPage] = useState('/data')
	const setPage = (key)=>{
		console.log(key)
		// history.push('/admin/data')
	}

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        {/* <Route path="/admin" component={Home}></Route> */}
        <Redirect to="/login" from="/" exact></Redirect>
        <Redirect to="/admin/data" from="/admin" exact></Redirect>
        <Route path='/admin' >
        <Layout className={styles.layoutWrap}>
          <Sider
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
            <Menu theme="dark" defaultSelectedKeys={['data']} mode="inline" onClick={ ({key})=>setPage(key)}>
              <Menu.Item key="data">
                {/* <EditOutlined /> */}
                <DatabaseOutlined />
                <span>实时数据</span>
              </Menu.Item>
              <Menu.Item key="2">
                <EditOutlined />
                <span>添加文章</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    {/* <Icon type="user" /> */}
                    <SettingOutlined />
                    <span>文章管理</span>
                  </span>
                }
              >
                <Menu.Item key="3">添加文章</Menu.Item>
                <Menu.Item key="4">文章列表</Menu.Item>
              </SubMenu>

              <Menu.Item key="9">
                <AudioOutlined />
                <span>留言管理</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
            <Content className={styles.contentWrap}>
              <Breadcrumb className={styles.headerWrap}>
                <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                <Breadcrumb.Item>工作台</Breadcrumb.Item>
              </Breadcrumb>
              <div className={styles.content}>
                {<Route exact path='/admin/addArticle' component={AddArticle}></Route>}
                {<Route exact path='/admin/data' component={Data}></Route>}
              </div>
            </Content>
            <Footer className={styles.footer}>BLOG 后台管理 By 2020 </Footer>
          </Layout>
        </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
