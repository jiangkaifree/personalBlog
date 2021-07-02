/*
 * @Author: jk
 * @Date: 2020-12-07 16:37:57
 * @Last Modified by: 小菜鸡
 * @Last Modified time: 2021-07-02 23:43:33
 */
import { createContext } from "react";
import { Row, Col, Breadcrumb, Divider, Tag, BackTop } from "antd";
import Head from "../../components/Head/Head";
// import ReactMarkdown from "react-markdown"; // 导入markdown
import {
  HomeOutlined,
  ReadOutlined,
  FieldTimeOutlined,
  VideoCameraTwoTone,
} from "@ant-design/icons";
import marked from "marked"; // 导入marked
import hljs from "highlight.js"; // 导入高亮插件
import "highlight.js/styles/vs2015.css"; //导入highlight的css
import styles from "styles/articlesInfo.module.scss";
import Header from "components/Header/Header";
import ArticleIndexs from "components/ArticleIndexs/ArticleIndexs";
// import RightAside from "components/RightAside/RightAside";     // 侧边栏

const articlesInfo = ({ blogInfo }) => {
  const IndexCxt = createContext();

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

  const indexList = [
    {
      title: "1、根本理念上的不同",
      key: "1、根本理念上的不同",
    },
    {
      title: "2、单文件组件",
      key: "2、单文件组件",
    },
  ];

  return (
    <>
      <Head></Head>
      <Header></Header>
      <Row className={styles.main} type="flex" justify="center" align="top">
        <Col
          id="info"
          className={styles.left}
          xs={24}
          sm={24}
          md={20}
          lg={16}
          xl={14}
          xxl={12}
        >
          <Breadcrumb className={styles.Breadcrumb}>
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/blogs">
              <ReadOutlined />
              <span>文章BLOG</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{blogInfo.articleTitle}</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.infoWrap}>
            <h5>{blogInfo.articleTitle}</h5>
            <div className={styles.titleWrap}>
              <span>
                <FieldTimeOutlined className={styles.time} />
                {blogInfo.articleDate}
              </span>
              <span>
                <VideoCameraTwoTone twoToneColor="#00cec9" />
                {blogInfo.articleType}
              </span>
              {/* <span>
                <EyeTwoTone twoToneColor="#b088f9" /> 5498人
              </span> */}
            </div>
          </div>
          <Divider orientation="left">
            {blogInfo.articleTags.map((item) => (
              <Tag color={item.color} key={item.color}>
                {item.title}
              </Tag>
            ))}
          </Divider>
          <section className={styles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(blogInfo.articleContent),
              }}
            ></div>
          </section>
        </Col>

        {/* <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4} xxl={8}>
          <IndexCxt.Provider value={indexList}>
            <ArticleIndexs IndexCxt={IndexCxt}></ArticleIndexs>
          </IndexCxt.Provider> 

           <BackTop className={styles.backTop} target ={()=>document.getElementById('info')}>UP</BackTop>
        </Col> */}
      </Row>
      {/* <RightAside></RightAside> */}
    </>
  );
};

// 获取BLOG详情
export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query; // 获取BLOG Id
  const res = await fetch(process.env.baseURL + `/blogInfo/${id}`);
  const { data } = await res.json();
  return {
    props: {
      blogInfo: data,
    },
  };
};

export default articlesInfo;
