import React from "react";
import styles from "../styles/tools.module.scss";
import Header from "../components/Header/Header";
import { Image, Row, Col } from "antd";
import Item from "antd/lib/list/Item";

const toolsList = [
  {
    id: "1221",
    title: "图床",
    desc: "这是一个对接阿里oss的在线图床",
    imgUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    id: "122341",
    title: "图床",
    desc: "这是一个对接阿里oss的在线图床",
    imgUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    id: "12213",
    title: "图床",
    desc: "这是一个对接阿里oss的在线图床",
    imgUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    id: "12321",
    title: "图床",
    desc: "这是一个对接阿里oss的在线图床",
    imgUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    id: "2323",
    title: "图床",
    desc: "这是一个对接阿里oss的在线图床",
    imgUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];
const Tools = () => {
  return (
    <>
      <Header />

      <div className={styles.toolsWrap}>
        <Row type="flex" align='middle' >
            {toolsList.map((tool) => (
          <Col xs={24} sm={10} md={8} lg={6} xl={5} className={styles.toolsItem} key={tool.id}>

              {/* <div > */}
                <Image width={80} src={tool.imgUrl} />
                <div>
                  <p className={styles.title}>{tool.title}</p>
                  <span className={styles.desc}>{tool.desc}</span>
                </div>
              {/* </div> */}
          </Col>

            ))}
        </Row>
      </div>
    </>
  );
};

export default Tools;
