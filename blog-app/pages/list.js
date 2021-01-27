// 没用上
import  { useState } from "react";
import { Row, Col, List } from "antd";
import Head from 'next/head'
import Header from "components/Header/Header";
import styles from "styles/List.module.scss";

const ArticlesList = () => {
  return (
    <>
    <Head>
        <title>小菜鸡BLOG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="前端技术,个人BLOG,技术交流分享,开发日常记录,blog记录,Vue手记分享,开发分享,react开发记录手记"
        ></meta>
        <meta
          name="author"
          content="前端小菜鸡,小菜鸡,工作记录,个人博客,开发分享"
        ></meta>
        <link rel="icon" href="/assets/avatar.jpg"></link>
      </Head>
      <Header></Header>
      <Row className={styles.main} type="flex" justify="center">
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
          aa
        </Col>

        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <p>右侧</p>
        </Col>
      </Row>
      <style jsx>
        {`
          p {
            color: red;
          }
        `}
      </style>
    </>
  );
};

export default ArticlesList
