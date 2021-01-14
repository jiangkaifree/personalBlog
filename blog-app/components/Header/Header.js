import React from "react";
import Router from 'next/router'
import { Row, Col ,Avatar,notification } from "antd";
import styles from "./header.module.scss";
import {
  EditTwoTone,
  FireTwoTone,
  CustomerServiceTwoTone,
  FlagTwoTone,
  UserOutlined
} from "@ant-design/icons";
// import logo from '../../images/logo.svg'

const Header = () => {

  // 进入BLOG页面
  const goBlogPages = () =>{
    Router.push({
      pathname: './blogList',
    })
  }

  // 进入视频教程页面
  const goVideoPage = () =>{
    notification.info({
      message: '暂未开通!',
      description: '对不起 ,该板块暂未开通服务,后续更新推出，请耐心等待!'
    })
    // Router.push({
    //   pathname
    // })
  }
  

  return (
    <header className={styles.headerWrap}>
      <Row align="middle" justify="space-around">
        <Col xxl={16} xl={12} lg={12} md={8} sm={24} xs={24}  className={styles.headerItem}>
        {/* <Avatar icon={<UserOutlined />} /> */}
        </Col>
        <Col xxl={2} xl={3} lg={3} md={4} sm={0} xs={0} className={styles.headerItem}>
          <span onClick={goBlogPages}>
            <EditTwoTone />
            文章BLOG
          </span>
        </Col>
        <Col xxl={2} xl={3} lg={3} md={4} sm={0} xs={0}  className={styles.headerItem}>
          <span onClick={goVideoPage}>
            <CustomerServiceTwoTone twoToneColor="#eb2f96" />
            视频教程
          </span>
        </Col>
        <Col xxl={2} xl={3} lg={3} md={4} sm={0}  xs={0} className={styles.headerItem}>
          <span>
            <FireTwoTone twoToneColor="#52c41a" />
            工具推荐
          </span>
        </Col>
        <Col xxl={2} xl={3} lg={3} md={4} sm={0}  xs={0} className={styles.headerItem}>
          <span>
            <FlagTwoTone twoToneColor="#68b0ab" />
            关于
          </span>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
