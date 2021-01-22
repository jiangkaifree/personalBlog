/*
 * @Author: jk
 * @Date: 2020-12-07 17:14:43
 * @Last Modified by: jk
 * @Last Modified time: 2021-01-22 11:53:05
 */
import React from "react";
// import { Popover, Button } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import styles from "./RightAside.module.scss";

const RightAside = () => {
  const content = <div></div>;
  return (
    <div className={styles.rightWrap}>
      <div>
        <GithubOutlined className={styles.github} />
      </div>
      <div>
        <QqOutlined className={styles.githubgithub} />
      </div>
      <div>
    
        <WechatOutlined className={styles.github} />
      </div>
    </div>
  );
};

export default RightAside;
