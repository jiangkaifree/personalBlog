/*
 * @Author: jk
 * @Date: 2020-12-07 17:14:43
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-07 20:26:06
 */
import React from "react";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import styles from "./RightAside.module.scss";

const RightAside = () => {
  return (
    <div className={styles.rightWrap}>
      <div>
        <GithubOutlined className={styles.github}/>
      </div>
      <div>
        <QqOutlined className={styles.githubgithub}/>
      </div>
      <div>
        <WechatOutlined className={styles.github}/>
      </div>
    </div>
  );
};

export default RightAside;
