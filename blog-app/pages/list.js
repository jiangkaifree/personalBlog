import React, { useState } from "react";
import { Row, Col, List } from "antd";
import Header from "components/Header/Header";
import styles from "styles/List.module.scss";

export default () => {
  
  return (
    <>
      <Header></Header>
      <Row className={styles.main} type="flex" justify="center">
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
          aa
        </Col>

        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </>
  );
};
