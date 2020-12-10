import React from "react";
import { Collapse,Tree } from "antd";
import { DownOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
import styles from "./Index.module.scss";
const Indexs = () => {
  return (
    <Collapse defaultActiveKey={["1"]} ghost>
      <Panel header="索引目录" key="1">
        {/* <p>文本没人</p> */}
        <Tree
        className={styles.treeWrap}
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        treeData={[
          {
            title: 'parent 1',
            key: '0-0',
            children: [
              {
                title: 'parent 1-0',
                key: '0-0-0',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-1',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-2',
                  },
                ],
              },
              {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-1-0',
                  },
                ],
              },
              {
                title: 'parent 1-2',
                key: '0-0-2',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-2-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-2-1',
                  },
                ],
              },
            ],
          },
        ]}
      />
      </Panel>
      
    </Collapse>
  );
};

export default Indexs;
