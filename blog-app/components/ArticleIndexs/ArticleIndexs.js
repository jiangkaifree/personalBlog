import {useContext} from "react";
import { Collapse, Tree,Affix } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
import styles from "./ArticleIndexs.module.scss";
const Indexs = ({IndexCxt}) => {
  const indexList = useContext(IndexCxt)
  console.log(indexList)

  // 点击索引跳转
  const goInfoIndex = (selectedKeys)=>{
    console.log(selectedKeys)
  }
  return (
    <Affix offsetTop={60}>
    <Collapse defaultActiveKey={["1"]} ghost className={styles.indexWrap}>
      <Panel header="索引目录" key="1">
        <Tree
          className={styles.treeWrap}
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={["0-0-0"]}
          treeData={indexList}
          onSelect={goInfoIndex}
        />
      </Panel>
    </Collapse>
    </Affix>
  );
};

export default Indexs;
