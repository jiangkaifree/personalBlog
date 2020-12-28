/*
 * @Author: jk
 * @Date: 2020-12-14 12:18:43
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-28 19:41:10
 */
import { useEffect, useState } from "react";
import { Table, Tag, Popconfirm, Space, Button } from "antd";
import styles from "./ArticlesList.module.scss";
import { articleListApi } from "../../api/api";

const ArticlesList = (props) => {
  const [articleList, setArticleList] = useState([]);
  // 获取文章列表列表数据
  useEffect(() => {
    articleListApi().then((res) => {
      setArticleList(res);
    });
  }, []);

  // 进入编辑页面
  const editArticle = (id) => {
    console.log(id);
    props.history.push({
      pathname: `/admin/addArticle/${id}`,
     
    });
  };

  // 删除文章
  const delArticle = (e) => {
    console.log(e);
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
      <Table columns={columns} dataSource={articleList} rowKey="articleId" />
    </div>
  );
};

export default ArticlesList;
