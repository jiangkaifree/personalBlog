/*
 * @Author: jk
 * @Date: 2020-12-14 10:57:56
 * @Last Modified by: 小菜鸡
 * @Last Modified time: 2021-01-05 17:40:04
 */

import { useState, useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  EditOutlined,
  AudioOutlined,
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
import ResultPage from "./views/ResultPage/ResultPage"; // 结果页面

// import Data from "./views/Data/Data";
// import AddArticle from "./views/AddArticle/AddArticle";

function App(props) {
  const { Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState([props.location.pathname]); // 路由
  const [breadcrumbItem, setBreadcrumbItem] = useState("可视化数据"); // 面包屑导航
  // console.log(props.history.listen(route => {
  //   console.log(route)
  // }),'props')
  // const menuList = [
  //   {
  //     path: "data",
  //     title: "数据台",
  //     icon: <PieChartOutlined />,
  //     children: [
  //       {
  //         path: "data",
  //         title: "实时数据",
  //         icon: <RadarChartOutlined />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "",
  //     title: "文章管理",
  //     icon: <SettingOutlined />,
  //     children: [
  //       {
  //         path: "/admin/addArticle",
  //         title: "添加文章",
  //         icon: <EditOutlined />,
  //       },
  //       {
  //         path: "articlesList",
  //         title: "文章列表",
  //         icon: <OrderedListOutlined />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "chat",
  //     title: "留言管理",
  //     icon: <AudioOutlined />,
  //     children: [
  //       {
  //         path: "/admin/chat",
  //         title: "留言管理",
  //         icon: <AudioOutlined />,
  //       },
  //     ],
  //   },
  // ];

  const menuList = [
    {
      path: "/admin/data",
      title: "可视化数据",
      icon: <RadarChartOutlined />,
    },
    {
      path: "/admin/addArticle",
      title: "添加文章",
      icon: <EditOutlined />,
    },
    {
      path: "/admin/articlesList",
      title: "文章列表",
      icon: <OrderedListOutlined />,
    },
    {
      path: "/admin/chat",
      title: "留言管理",
      icon: <AudioOutlined />,
    },
  ];

  useEffect(() => {
    const titleList = {
      "/admin/data": "可视化数据",
      "/admin/articlesList": "文章列表",
      "/admin/chat": "留言管理",
    };
    // setActiveItem(['1']);
    setBreadcrumbItem(titleList[props.location.pathname]);

  }, [props.location.pathname]);

  // 跳转页面
  const setPage = (key) => {
    console.log(key);
    setActiveItem([menuList[key].path]);
    props.history.push(menuList[key].path);
    setBreadcrumbItem(menuList[key].title);
  };

  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/user/login" exact component={Login}></Route>
        <Redirect to="/user/login" from="/" exact></Redirect>
        <Route path="/admin/addArticle/:id?" component={AddArticle}></Route>
        <Route exact path="/admin/result" component={ResultPage}></Route>
        <Redirect to="/admin/data" from="/admin" exact></Redirect>
        <Route path="/admin">
          <Layout className={styles.layoutWrap}>
            <Sider
              theme="dark"
              collapsible
              collapsed={collapsed}
              onCollapse={(collapsed) => setCollapsed(collapsed)}
              className={styles.siderWrap}
            >
              <QueueAnim delay={550} type="left" leaveReverse>
                <div className={styles.avatarWrap} key="0">
                  <Avatar size={48} icon={<UserOutlined />} />
                  <p className={styles.name}>江凯</p>
                  <p className={styles.date}>
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <Menu
                  className={styles.menuWrap}
                  defaultSelectedKeys={activeItem}
                  mode="inline"
                  onClick={({ key }) => setPage(key)}
                  key="1"
                >
                  {/* {menuList.map((item, index) => (

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
                  ))} */}
                  {menuList.map((item, index) => (
                    <Menu.Item key={index} icon={item.icon}>
                      {item.title}
                    </Menu.Item>
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
