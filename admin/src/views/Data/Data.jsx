import { Button } from "antd";
import React from "react";
// import styles from "./Data.module.scss";
// import { getArticleList } from "../../utils/api";
const data = ['11','122']
const Data = () => {
  const aa = (id) => {
    console.log(id)
    // getArticleList({
    //   endTime: 1608134400000,
    //   pageIndex: 1,
    //   pageSize: 50,
    //   startTime: 1608048000000,
    // }).then((res) => {
    //     console.log(res)
    // });
  };
  return (
    <div>
      数据页面
      {/* <Button onClick={aa(data[1])}>aaaa</Button> */}
      {
        data.map(item => (
          <Button onClick={() => {aa(item)}}>aaaa</Button>
        ))
      }
    </div>
  );
};

export default Data;
