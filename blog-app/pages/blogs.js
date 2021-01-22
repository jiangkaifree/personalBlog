import { useState } from "react";
import Router from "next/router";
import { List, Card, Divider, Row, Col, Pagination, Tag } from "antd";
import { VideoCameraTwoTone, EyeTwoTone, BellTwoTone } from "@ant-design/icons";
import styles from "../styles/blogList.module.scss"; // 样式
import Header from "components/Header/Header"; // 头部组件
// import RightAside from "components/RightAside/RightAside";    // 右侧联系组件

const blogList = ({ articleList }) => {
  // 进入详情页面
  const goArticleInfo = (id) => {
    // console.log(process.env.customKey)
    Router.push({
      pathname: "./articlesInfo/[id]",
      query: {
        id,
      },
    });
  };

  /**
   * TODO 列表数据切换
   * @param {Number | String} page  页数索引 
   */
  const changePageIndex = (page)=>{
    console.log(page)
    
  }

  return (
    <>
      <Header></Header>

      <Row type="flex" justify="center">
        <Col className={styles.left} xs={24} sm={24} md={18} lg={22} xl={18}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
              xl: 3,
              xxl: 3,
            }}
            dataSource={articleList}
            renderItem={(item) => (
              <List.Item className={styles.listWrap}>
                <Card
                  title={item.articleTitle}
                  onClick={() => goArticleInfo(item.articleId)}
                >
                  <div className={styles.context}>{item.articleDesc}</div>
                  <Divider orientation="left">
                    {item.articleTags.map((tags, idx) => (
                      <Tag color={tags.color} key={idx}>
                        {tags.title}
                      </Tag>
                    ))}
                  </Divider>
                  <div className={styles.infoWrap}>
                    <span>
                      <BellTwoTone /> {item.articleDate}
                    </span>
                    <span>
                      <VideoCameraTwoTone /> 视频教程
                    </span>
                    <span>
                      <EyeTwoTone /> 5498人
                    </span>
                  </div>
                </Card>
              </List.Item>
            )}
          />

          <Pagination
            className={styles.pageWrap}
            defaultCurrent={1}
            total={50}
            onChange={(page)=>changePageIndex(page)}
          />
        </Col>
        {/* <RightAside></RightAside> */}
      </Row>
    </>
  );
};

// 获取页面数据
export const getStaticProps = async () => {
  const res = await fetch(process.env.baseURL + "/client/blogList");
  const { data } = await res.json();
  console.log(data);
  return {
    props: {
      articleList: data,
    },
  };
};

export default blogList;
