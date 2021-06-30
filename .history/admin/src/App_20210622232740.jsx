/*
 * @Author: jk
 * @Date: 2020-12-14 10:57:56
 * @Last Modified by: 小菜鸡
 * @Last Modified time: 2021-05-12 22:45:38
 */

import { useState, useEffect } from "react";
import {
  Route,
  Switch as RouterSwitch,
  Redirect,
  withRouter,
} from "react-router-dom";
import QueueAnim from "rc-queue-anim";
import { Layout, Menu, Breadcrumb, Avatar, Space, Badge, Switch } from "antd";
import {
  BellOutlined,
  MailOutlined,
  SettingOutlined,
  ExpandOutlined,
  CheckOutlined,
  CloseOutlined 
} from "@ant-design/icons";
import {
  EditOutlined,
  AudioOutlined,
  OrderedListOutlined,
  HomeOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

import styles from "./App.module.scss";
import screenfull from "screenfull"; // 导入全屏插件
import Routes from "./router";      // 导入子路由配置
import Login from "./views/Login/Login";    // 登录页面
import AddArticle from "./views/AddArticle/AddArticle"; // 添加文章页面
import NotFound from "./views/NotFound/NotFound"; //404
import ResultPage from "./views/ResultPage/ResultPage"; // 结果页面

// import Data from "./views/Data/Data";
// import AddArticle from "./views/AddArticle/AddArticle";

function App(props) {
  const { Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
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
      title: "访问数据",
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
      "/admin/data": "数据台",
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

  /**
   * TODO 实现页面全屏化功能
   */
  const fullScreen = () => {
    screenfull.toggle();
  };

  

  return (
    <div className={styles.App}>
      
      <RouterSwitch>
        <Redirect to="/user/login" from="/" exact></Redirect>
        <Route path="/user/login" exact component={Login}></Route>
        <Route path="/admin/addArticle/:id?" component={AddArticle}></Route>
        <Route exact path="/admin/result" component={ResultPage}></Route>
        <Redirect to="/admin/data" from="/admin" exact></Redirect>
        <Route path="/admin">
          <Layout className={styles.layoutWrap}>
            <Sider
              theme="dark"
              trigger={null}
              collapsible
              collapsed={collapsed}
              onCollapse={(collapsed) => setCollapsed(collapsed)}
              className={styles.siderWrap}
            >
              <QueueAnim delay={550} type="left" leaveReverse>
                <div className={styles.avatarWrap} key="0">
                  <Avatar size={50} src='/avatar.jpg' />
                  <p className={styles.name}>小菜鸡</p>
                  <p className={styles.date}>
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
                <div className={styles.switch} key='1'>
                  <Switch checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />} defaultChecked onChange={(checked) => setCollapsed(checked)} />
                </div>
                <Menu
                  className={styles.menuWrap}
                  defaultSelectedKeys={activeItem}
                  mode="inline"
                  onClick={({ key }) => setPage(key)}
                  key="2"
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
                <div className={styles.headerWrap}>
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <a href="/admin/data">
                        <HomeOutlined />
                      </a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    <Breadcrumb.Item>{breadcrumbItem}</Breadcrumb.Item>
                  </Breadcrumb>
                  <Space size="large" className={styles.infoWrap}>
                    <ExpandOutlined
                      className={styles.screen}
                      onClick={fullScreen}
                    />

                    <Badge
                      size="small"
                      className={styles.infoItem}
                      count={5}
                      title="您有三条通知!"
                    >
                      <BellOutlined />
                    </Badge>

                    <Badge
                      color="#f39c12"
                      className={styles.infoItem}
                      count={2}
                    >
                      <MailOutlined />
                    </Badge>
                    <Badge title="设置" className={styles.settingItem}>
                      <SettingOutlined />
                    </Badge>
                    <Badge dot color="#1abc9c" title="个人信息">
                      <Avatar src='/avatar.jpg' />
                    </Badge>
                  </Space>
                </div>
                <div className={styles.content}>
                  <Routes></Routes>
                </div>
              </Content>
              <Footer className={styles.footer}>BLOG 后台管理 By 2021</Footer>
            </Layout>
          </Layout>
        </Route>

        {/* 暂时注释 */}
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </RouterSwitch>
    </div>
  );
}

export default withRouter(App);
