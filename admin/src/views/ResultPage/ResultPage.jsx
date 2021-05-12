import { Result, Button } from "antd";
import styles from "./ResultPage.module.scss";
const ResultPage = () => {
  return (
    <Result
      className={styles.resultWrap}
      status="success"
      title="发布成功!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          返回
        </Button>,
        <Button key="buy">查看</Button>,
      ]}
    />
  );
};
export default ResultPage;
