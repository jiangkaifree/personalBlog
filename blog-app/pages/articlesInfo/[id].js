/*
 * @Author: jk
 * @Date: 2020-12-07 16:37:57
 * @Last Modified by: jk
 * @Last Modified time: 2021-01-22 17:02:13
 */

import React from "react";
import { Row, Col, Breadcrumb, Divider, Tag, BackTop } from "antd";
// import ReactMarkdown from "react-markdown"; // 导入markdown
import {
  HomeOutlined,
  ReadOutlined,
  FieldTimeOutlined,
  VideoCameraTwoTone,
  EyeTwoTone,
} from "@ant-design/icons";
import marked from "marked"; // 导入marked
import hljs from "highlight.js"; // 导入高亮插件
import "highlight.js/styles/monokai-sublime.css"; //导入highlight的css
import styles from "styles/articlesInfo.module.scss";
import Header from "components/Header/Header";
import Indexs from "components/Indexs/Indexs";
// import RightAside from "components/RightAside/RightAside";     // 侧边栏

const articlesInfo = ({ blogInfo }) => {
  // marked配置
  marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  let markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";

  return (
    <>
      <Header></Header>
      <Row className={styles.main} type="flex" justify="center" align="top">
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
          <Breadcrumb className={styles.Breadcrumb}>
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <ReadOutlined />
              <span>文章BLOG</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{blogInfo.articleTitle}</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.infoWrap}>
            <h5>{blogInfo.articleTitle}</h5>
            <div className={styles.titleWrap}>
              <span>
                <FieldTimeOutlined className={styles.time} />{" "}
                {blogInfo.articleDate}
              </span>
              <span>
                <VideoCameraTwoTone twoToneColor="#fff3b2" />{" "}
                {blogInfo.articleType}
              </span>
              {/* <span>
                <EyeTwoTone twoToneColor="#b088f9" /> 5498人
              </span> */}
            </div>
          </div>
          <Divider orientation="left">
            {blogInfo.articleTags.map((item) => (
              <Tag color={item.color} key={item.color}>{item.title}</Tag>
            ))}
          </Divider>
          <section className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: marked(blogInfo.articleContent) }}></div>
          </section>
        </Col>

        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* 右侧 */}
          <Indexs></Indexs>
        </Col>
      </Row>
      {/* <RightAside></RightAside> */}
    </>
  );
};

// 获取BLOG详情
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query; // 获取BLOG Id
  const res = await fetch(process.env.baseURL + `/client/blogInfo/${id}`);
  const { data } = await res.json();
  return {
    props: {
      blogInfo: data,
    },
  };
};

export default articlesInfo;
