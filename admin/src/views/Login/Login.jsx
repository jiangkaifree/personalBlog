/* * @Author: undefined  * @Date: 2020-11-30 15:06:29  * @Last Modified by:   jk  * @Last Modified time: 2020-11-30 15:06:29  */
import React, { useState } from 'react';
import { Card, Input, Button, Spin } from 'antd';
import styles from './Login.module.scss'
import {
   UserOutlined,
   EditOutlined
} from '@ant-design/icons';




export default () => {
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const checkLogin = () => {
      setIsLoading(true)
      setTimeout(() => {
         setIsLoading(false)
      }, 1000)
   }
   return (
      <div className={styles.loginDiv}>

         <Spin tip="Loading..." spinning={isLoading}>
            <Card title="Blog  System" bordered={true} className={styles.cardWrap} >
               <Input
                  id="userName"
                  size="large"
                  placeholder="用户名"
                  prefix={<UserOutlined className={styles.iconColor} />}
                  onChange={(e) => { setUserName(e.target.value) }}
               />
               <br /><br />
               <Input.Password
                  id="password"
                  size="large"
                  placeholder="Enter your password"
                  prefix={<EditOutlined className={styles.iconColor} />}
                  onChange={(e) => { setPassword(e.target.value) }}
               />
               <br /><br />
               <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
            </Card>
         </Spin>
      </div>
   )
}