import {useState} from 'react'
import Router from "next/router";
import { List, Card, Button, Divider, Row, Col, message, Tag } from "antd";
import { VideoCameraTwoTone, EyeTwoTone, BellTwoTone } from "@ant-design/icons";
import styles from "../styles/blogs.module.scss"; // 样式
import Head from '../components/Head/Head'
import Header from "components/Header/Header"; // 头部组件
// import RightAside from "components/RightAside/RightAside";    // 右侧联系组件

const blogList = ({ articleList }) => {
  const [list,setList] = useState(articleList)
  const [pages,setPages] = useState(1)
  // 进入详情页面
  const goArticleInfo = (id) => {
    // console.log(process.env.customKey)
    Router.push({
      pathname: "./articlesInfo/[id]",
      query: {
        id,
      },
    },`./articlesInfo/[id]`);
  };

  /**
   * TODO 列表数据分页
   * @param {Number | String} page  页数索引
   */
  const changePageIndex = async () => {
    // 请求获取列表下一页数据
    console.log(pages,'这是page')
    const res = await fetch(
      process.env.baseURL + `/blogList/?pageIndex=${pages}`
    );
    const { data } = await res.json();
    console.log(data,list)
    if(data.length == 0){
      return message.warning('只写了这么多啦！');
    }
    setList([...list,...data])
    setPages(pages + 1)
  };

  return (
    <>
      <Head></Head>
      <Header></Header>

      <Row type="flex" justify="center">
        <Col className={styles.left} xs={24} sm={24} md={18} lg={22} xl={18}>
          <List
          className={styles.listWrap}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            dataSource={list}
            renderItem={(item) => (
              <List.Item className={styles.listItem}>
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
                      <BellTwoTone className={styles.icons}/>{item.articleDate} 
                    </span>
                    <span>
                      <VideoCameraTwoTone className={styles.icons}/>{item.articleType} 
                    </span>
                    <span>
                      <EyeTwoTone className={styles.icons}/> 
                      {item.viewCount}
                    </span>
                  </div>
                </Card>
              </List.Item>
            )}
          />

          {/* <Pagination
            className={styles.pageWrap}
            defaultCurrent={1}
            total={50}
            onChange={(page) => changePageIndex(page)}
          /> */}
          <Button type="primary" className={styles.loadMore} onClick={changePageIndex}>Load More</Button>
        </Col>
        {/* <RightAside></RightAside> */}
      </Row>
    </>
  );
};

// 获取页面数据
export const getServerSideProps = async () => {
  const res = await fetch(
    process.env.baseURL + `/blogList/?pageIndex=${0}`
  );
  const { data } = await res.json();
  // console.log(data);
  return {
    props: {
      articleList: data,
    },
  };
};

export default blogList;
