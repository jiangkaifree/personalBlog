// import { useState } from "react";
import Router from "next/router";
import { Row, Col, Image, Tag } from "antd";
import Head from '../components/Head/Head'
// import RightAside from "components/RightAside/RightAside";
import PersonInfo from "components/PersonInfo/PersonInfo";
import Header from "components/Header/Header";
import styles from "styles/index.module.scss";

const Index = ({ articleList }) => {
  // 进入详情页面
  const goArticleInfo = (id) => {
    // console.log(id)
    // Router.push({ pathname: './articlesInfo/[id]', query: { id: 1 } },`/articlesInfo/${id}`)
    Router.push({
      pathname: "./articlesInfo/[id]",
      query: {
        id,
      },
    },`./articlesInfo/[id]`);
  };

  return (
    // <div>
    <>
      <Head></Head>
      {/* 头部组件 */}
      <Header></Header>
      <Row className={styles.main} type="flex" justify="center">
        <Col className={styles.left} xs={24} sm={24} md={14} lg={16} xl={10}>
          {articleList.map((item) => (
            <div
              className={styles.listWrap}
              key={item.articleId}
              onClick={() => goArticleInfo(item.articleId)}
            >
              <img className={styles.img} src={item.img} />
              <div className={styles.infoWrap}>
                <p className={styles.tagWrap}>
                  {/* <Tag color="magenta">magenta</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="cyan">cyan</Tag> */}
                  {item.articleTags.map((tags, idx) => (
                    <Tag color={tags.color} key={idx}>
                      {tags.title}
                    </Tag>
                  ))}
                </p>
                <p className={styles.title}>{item.articleTitle}</p>
                <p className={styles.date}>{item.articleDate}</p>
              </div>
            </div>
          ))}
        </Col>

        <Col className={styles.right} xs={24} sm={24} md={14} lg={10} xl={5}>
          <PersonInfo></PersonInfo>
        </Col>
        {/* <RightAside></RightAside> */}
      </Row>
    </>
  );
};

// 获取页面数据
export const getStaticProps = async () => {
  const res = await fetch(process.env.baseURL + "/client/index");
  const { data } = await res.json();
  for (let idx in data) {
    data[idx].img = process.env.indexImgList[idx];
  }
  return {
    props: {
      articleList: data,
    },
  };
};

export default Index;
