/*
 * @Author: jk
 * @Date: 2020-12-14 10:57:56
 * @Last Modified by: jk
 * @Last Modified time: 2021-01-04 17:05:20
 */

import { useState } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  EditOutlined,
  AudioOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
  OrderedListOutlined,
  HomeOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

import styles from "./App.module.scss";
import Routes from "./router";
// 登录页面
import Login from "./views/Login/Login";
import AddArticle from "./views/AddArticle/AddArticle"; // 添加文章页面
import NotFound from "./views/NotFound/NotFound"; //404
import ResultPage from "./views/ResultPage/ResultPage";     // 结果页面

// import Data from "./views/Data/Data";
// import AddArticle from "./views/AddArticle/AddArticle";

function App(props) {
  const { Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(["data"]); // 路由
  const [breadcrumbItem, setBreadcrumbItem] = useState("实时数据"); // 面包屑导航
  // console.log(props.history.listen(route => {
  //   console.log(route)
  // }),'props')
  const menuList = [
    {
      path: "data",
      title: "数据台",
      icon: <PieChartOutlined />,
      children: [
        {
          path: "data",
          title: "实时数据",
          icon: <RadarChartOutlined />,
        },
      ],
    },
    {
      path: "",
      title: "文章管理",
      icon: <SettingOutlined />,
      children: [
        {
          path: "/admin/addArticle",
          title: "添加文章",
          icon: <EditOutlined />,
        },
        {
          path: "articlesList",
          title: "文章列表",
          icon: <OrderedListOutlined />,
        },
      ],
    },
    {
      path: "chat",
      title: "留言管理",
      icon: <AudioOutlined />,
      children: [
        {
          path: "/admin/chat",
          title: "留言管理",
          icon: <AudioOutlined />,
        },
      ],
    },
  ];

  // 时间输出
  // const time = () => {
  //   const time = "";
  //   if (new Date().getHours() >= 9) {
  //     time = "早上好！";
  //   } else if (new Date().getHours() >= 12) {
  //     time = "上午好！";
  //   } else if (new Date().getHours() >= 18) {
  //     time = "下午好";
  //   } else if (new Date().getHours() >= 24) {
  //     time = "晚上好！！";
  //   } else {
  //     time = "凌晨早！";
  //   }
  //   return (<span>{time}</span>);
  // };

  // 跳转页面
  const setPage = (key) => {
    console.log(key);
    setActiveItem([key]);
    props.history.push(key);
  };

  // 设置面包屑title
  const changeBreadcrumbItem = ({ key }) => {
    // console.log(menuList,key)
    setBreadcrumbItem(menuList[key].title);
  };

  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/user/login" exact component={Login}></Route>
        <Redirect to="/user/login" from="/" exact></Redirect>
        <Route  path="/admin/addArticle/:id?" component={AddArticle}></Route>
        <Route exact path="/admin/result" component={ResultPage}></Route>
        <Redirect to="/admin/data" from="/admin" exact></Redirect>
        <Route path="/admin">
          <Layout className={styles.layoutWrap}>
            <Sider
              theme="light"
              collapsible
              collapsed={collapsed}
              onCollapse={(collapsed) => setCollapsed(collapsed)}
              className={styles.siderWrap}
            >
              <QueueAnim delay={550} type="left" leaveReverse>
                <div className={styles.avatarWrap} key="0">
                  <Avatar size={48} icon={<UserOutlined />} />
                  <p className={styles.date}>江凯</p>
                  <p className={styles.date}>
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <Menu
                  theme="light"
                  defaultSelectedKeys={activeItem}
                  mode="inline"
                  onClick={({ key }) => setPage(key)}
                  key="1"
                >
                  {menuList.map((item, index) => (
                    //   <Menu.Item key={Item.path}>
                    //   {item.icon}
                    //   <span>{item.title}</span>
                    // </Menu.Item>

                    <SubMenu
                      key={index}
                      title={
                        <span>
                          {item.icon}
                          <span>{item.title}</span>
                        </span>
                      }
                      onTitleClick={changeBreadcrumbItem}
                    >
                      {item.children.map((items) => (
                        <Menu.Item key={items.path}>
                          {items.icon}
                          {items.title}
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ))}

                  {/* <Menu.Item key="data">
                    <PieChartOutlined />
                    <span>实时数据</span>
                  </Menu.Item>

                  <SubMenu
                    key="3"
                    title={
                      <span>
                        <SettingOutlined />
                        <span>文章管理</span>
                      </span>
                    }
                  >
                    <Menu.Item key="addArticle">
                      <EditOutlined />
                      添加文章
                    </Menu.Item>

                    <Menu.Item key="articlesList">
                      <OrderedListOutlined />
                      文章列表
                    </Menu.Item>
                  </SubMenu>

                  <Menu.Item key="chat">
                    <AudioOutlined />
                    <span>留言管理</span>
                  </Menu.Item> */}
                </Menu>
              </QueueAnim>
            </Sider>
            <Layout>
              {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
              <Content className={styles.contentWrap}>
                <Breadcrumb className={styles.headerWrap}>
                  <Breadcrumb.Item>
                    <a href="/admin">
                      <HomeOutlined />
                    </a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>工作台</Breadcrumb.Item>
                  <Breadcrumb.Item>{breadcrumbItem}</Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.content}>
                  <Routes></Routes>
                </div>
              </Content>
              <Footer className={styles.footer}>BLOG 后台管理 By 2020</Footer>
            </Layout>
          </Layout>
        </Route>

          {/* 暂时注释 */}
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
