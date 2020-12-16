import React from "react";
import { Row, Col ,Avatar} from "antd";
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
  return (
    <header className={styles.headerWrap}>
      <Row align="middle" justify="space-around">
        <Col xl={16} lg={12} md={12} sm={24} xs={24}  className={styles.headerItem}>
        <Avatar icon={<UserOutlined />} />
        </Col>
        <Col xl={2} lg={3} md={3} sm={0} xs={0} className={styles.headerItem}>
          <span>
            <EditTwoTone />
            文章Blog
          </span>
        </Col>
        <Col xl={2} lg={3} md={3} sm={0} xs={0}  className={styles.headerItem}>
          <span>
            <CustomerServiceTwoTone twoToneColor="#eb2f96" />
            视频教程
          </span>
        </Col>
        <Col xl={2} lg={3} md={3} sm={0}  xs={0} className={styles.headerItem}>
          <span>
            <FireTwoTone twoToneColor="#52c41a" />
            工具推荐
          </span>
        </Col>
        <Col xl={2} lg={3} md={3} sm={0}  xs={0} className={styles.headerItem}>
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
