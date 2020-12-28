/*
 * @Author: 小菜鸡
 * @Date: 2020-12-24 17:29:06
 * @Last Modified by: jk
 * @Last Modified time: 2020-12-28 15:49:40
 */
// import {useEffect} from "react";
import { Result, Button } from 'antd';
import styles from "./NotFound.module.scss";

const NotFound = (props) => {
  
  //返回上一页
  const goBack = ()=> {
    props.history.go(-1)
  }
  return (
    <Result
    className={styles.resultWrap}
    status="404"
    title="404"
    subTitle="对不起!! 页面被丢失了~~~~"
    extra={<Button type="primary" onClick={goBack}>返回</Button>}
  />
  )
};

export default NotFound;
