// import { Button } from "antd";
// import React from "react";
// import styles from "./Data.module.scss";
// import { getArticleList } from "../../utils/api";
import {Table} from 'antd'
const Data = () => {
  const dataSource = [
    {
      // key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div>
      数据页面
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Data;
