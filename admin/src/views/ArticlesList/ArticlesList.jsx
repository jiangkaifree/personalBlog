/*
 * @Author: jk
 * @Date: 2020-12-14 12:18:43
 * @Last Modified by: jk
 * @Last Modified time: 2021-01-11 16:45:25
 */
import { useEffect, useState } from "react";
import { Table, Tag, Popconfirm, notification, Space, Button } from "antd";
import styles from "./ArticlesList.module.scss";
import { articleListApi, delArticleApi } from "../../api/api";

const ArticlesList = (props) => {
  const [articleList, setArticleList] = useState([]);
  /**
   * TODO 获取文章列表列表数据
   */
  const getArticleList = () => {
    articleListApi().then((res) => {
      setArticleList(res);
    });
  };
  
  useEffect(() => {
    getArticleList()
  }, []);

  /**
   * TODO 进入编辑页面
   * @param {String ｜ Number} id 文章id
   */
  const editArticle = (id) => {
    console.log(id);
    props.history.push({
      pathname: `/admin/addArticle/${id}`,
    });
  };

  /**
   * TODO 删除文章
   * @param {String ｜ Number} id 文章id 
   */
  const delArticle = (id) => {
    console.log(id);
    delArticleApi(id).then((res) => {
      // console.log(res)
      notification.success({
        message: res.message,
      });
      // 刷新列表
      getArticleList()
    });
  };

  // 表格头部
  const columns = [
    {
      title: "标题",
      dataIndex: "articleTitle",
      render: (text) => <span className={styles.title}>{text}</span>,
    },
    {
      title: "时间",
      dataIndex: "articleDate",
      render: (text) => <span className={styles.date}>{text}</span>,
    },

    {
      title: "浏览量",
      dataIndex: "viewCount",
    },
    {
      title: "类型",
      dataIndex: "articleType",
    },
    {
      title: "标签",
      dataIndex: "articleTags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={tag.color} key={tag.color}>
                {tag.title}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "操作",
      render: (text) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            onClick={() => editArticle(text.articleId)}
          >
            编辑
          </Button>
          <Popconfirm
            title="确认删除吗?"
            onConfirm={() => delArticle(text.articleId)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="text" danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.listWrap}>
      <Table columns={columns} dataSource={articleList}  rowKey="articleId" simple />
    </div>
  );
};

export default ArticlesList;
