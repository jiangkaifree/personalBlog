import { useState } from "react";
import { Avatar, Space,Button } from "antd";
import { UserOutlined,CommentOutlined } from "@ant-design/icons";
import styles from "./PersonInfo.module.scss";
const PersonInfo = () => {
  return (
    <div className={styles.personInfo}>
      <Space size="large">
        <Avatar size={100} icon={<UserOutlined />} />
        <div className={styles.titleWrap}>
          <img src="/hi.svg" />
          <p>你好! 欢迎来到我的网站</p>
        </div>
      </Space>
      <p className={styles.job}>我是一个小菜鸡，从事前端工作</p>
      <p>这是我的个人网站, 记录日常,希望你可以找到对你有用的东西!</p>
      <div className={styles.contact}>
      <Button type="primary" shape="round" icon={<CommentOutlined />} size='large'>
          联系
        </Button>
      </div>
    </div>
  );
};
export default PersonInfo;
