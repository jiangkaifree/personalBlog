// import { useState } from "react";
import { Avatar, Space, Button, Tooltip, Popover,Image } from "antd";
import {
  UserOutlined,
  CommentOutlined,
  GithubOutlined,
  WechatOutlined,
  QqOutlined,
} from "@ant-design/icons";
import styles from "./PersonInfo.module.scss";
const PersonInfo = () => {
  return (
    <div className={styles.personInfo}>
      <Space size="large">
        <Avatar
          size={100}
          shape="square"
          icon={<UserOutlined />}
          src="/assets/avatar.jpg"
        />
        <div className={styles.titleWrap}>
          {/* <img src="/assets/hi.svg" /> */}
          <p>👋你好! 😄 欢迎来到我的网站</p>
        </div>
      </Space>
      <p className={styles.job}>我是一个小菜鸡，从事前端工作</p>
      <p>
        这是我的个人BLOG网站,记录日常开发工作以及学习笔记, 欢迎浏览,
        下方有此项目仓库地址。希望你可以找到对你有用的东西!
      </p>

      <div className={styles.platform}>
        <div>
          {/* <GithubOutlined className={styles.github} /> */}
          <Tooltip title="GitHub" color="#2db7f5">
            <Button
              type="link"
              target="_blank"
              shape="circle"
              icon={<GithubOutlined />}
              href="https://github.com/2462870727"
            />
          </Tooltip>
        </div>
        <div>
          {/* <QqOutlined className={styles.github} /> */}
          <Button
            type="link"
            target="_blank"
            shape="circle"
            icon={<QqOutlined />}
            href="tencent://message/?uin=2462870727&Site=&Menu=yes"
          />
        </div>
        <div>
          {/* <WechatOutlined className={styles.github} /> */}
          <Popover content={ <Image
      width={200}
      src="/assets/weChat.jpg"
    />} placement="right">
            <Button type="link" shape="circle" icon={<WechatOutlined />} />
          </Popover>
        </div>
      </div>

      <div className={styles.contact}>
        <Space size="middle">
          <Button
            type="link"
            target="_blank"
            className={styles.storageBtn}
            href="https://gitee.com/JK-2462870727"
          >
            我的仓库
          </Button>
          <Button
            className={styles.msgBtn}
            type="primary"
            shape="round"
            icon={<CommentOutlined />}
            size="large"
          >
            给我留言
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default PersonInfo;
