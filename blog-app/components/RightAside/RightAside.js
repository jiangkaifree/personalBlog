/*
 * @Author: jk
 * @Date: 2020-12-07 17:14:43
 * @Last Modified by: jk
 * @Last Modified time: 2021-02-05 20:41:45
 */
import React from "react";
// import { Popover, Button } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import styles from "./RightAside.module.scss";

const RightAside = () => {
  /**
   * TODO 跳转Github
   */
  const goGithub = ()=>{
    window.location.href = 'https://gitee.com/JK-2462870727'
  }

  /**
   * TODO 唤起qq加好友
   */
  const getQQ = ()=>{
    window.location.href = 'tencent://message/?uin=2462870727&Site=&Menu=yes'
  }
  return (
    <div className={styles.rightWrap}>
      <div onClick={goGithub}>
        <GithubOutlined className={styles.github} />
      </div>
      <div onClick={getQQ}>
        <QqOutlined className={styles.githubgithub} />
      </div>
      <div>
        <WechatOutlined className={styles.github} />
      </div>
    </div>
  );
};

export default RightAside;
