/*
 * @Author: jk
 * @Date: 2020-12-07 16:37:57
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-07 17:57:15
 */

import React from "react";
import { Row, Col, Breadcrumb,Divider  } from "antd";
import { HomeOutlined, ReadOutlined,BellTwoTone,VideoCameraTwoTone,EyeTwoTone } from "@ant-design/icons";
import styles from "styles/articlesInfo.module.scss";
import Header from "components/Header/Header";

const articlesInfo = () => (
  <>
    <Header></Header>

    <Row className={styles.main} type="flex" justify="center">
      <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <ReadOutlined />
            <span>文章Blog</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.infoWrap}>
          <h5>文章标题文章标题文章标题文章标题</h5>
          <div className={styles.titleWrap}>
            <span>
              <BellTwoTone /> 2019-06-28
            </span>
            <span>
              <VideoCameraTwoTone /> 视频教程
            </span>
            <span>
              <EyeTwoTone /> 5498人
            </span>
          </div>
        </div>
        <Divider orientation="left">正文内容</Divider>
        <section className={styles.content}>内容内容内容内容内容内容内容内容</section>
      </Col>

      <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>
  </>
);
export default articlesInfo;
