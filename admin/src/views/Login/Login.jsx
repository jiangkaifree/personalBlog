/* * @Author: undefined  * @Date: 2020-11-30 15:06:29  * @Last Modified by:   jk  * @Last Modified time: 2020-11-30 15:06:29  */
import React, { useState } from "react";
import { Card, Input, Button, Spin, message,notification } from "antd";
import styles from "./Login.module.scss";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import { userLoginApi } from "../../api/api";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onKeyup = (e)=>{
    console.log(e)
  }
  // 登录
  const checkLogin = () => {
    setIsLoading(true);
    if (!userName) {
      message.error("用户名不能为空");
      setIsLoading(false);
      return false;
    } else if (!password) {
      message.error("密码不能为空");
      setIsLoading(false);
      return false;
    }
    /**请求登录接口 */
    userLoginApi({
      userName,
      password,
    }).then((res) => {
      setIsLoading(false);
      if(res) {
        notification.success({
          message: '登录成功',
          description: "欢迎回来",
        });

        localStorage.setItem("openId",res.openId)
        props.history.push('/admin/data');
      }
    });
  };
  return (
    <div className={styles.loginDiv}>
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="Blog  System" bordered={true} className={styles.cardWrap}>
          <Input
            id="userName"
            size="large"
            placeholder="用户名"
            prefix={<UserOutlined className={styles.iconColor} />}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className={styles.input}
          />
          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<EditOutlined className={styles.iconColor} />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={styles.input}
          />

          <Button type="primary" size="large" block onClick={checkLogin}  onKeyUp={(e) =>onKeyup(e)}>
            Login In
          </Button>
        </Card>

        <footer className={styles}></footer>
      </Spin>
    </div>
  );
};

export default Login;
