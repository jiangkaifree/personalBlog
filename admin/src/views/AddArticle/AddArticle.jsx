import { useState } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Avatar,
  Drawer,
  Form,
  DatePicker,
  Select,
} from "antd";
import { UserOutlined, SendOutlined } from "@ant-design/icons";
import styles from "./AddArticle.module.scss";

const AddArticle = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [tags, setTags] = useState(["Vue", "React"]);

  // 获取标签内容
  const tagsList = ["Vue", "React"];

  //  开启Drawer
  const showDrawer = () => {
    setVisible(true);
  };

  //  关闭Drawer
  const onClose = () => {
    setVisible(false);
  };
  return (
    <main>
      <div className={styles.titleWrap}>
        <Input className={styles.titleInput} placeholder="输入文章标题......" />
        <Button
          type="primary"
          size="large"
          icon={<SendOutlined />}
          className={styles.send}
          ghost
          onClick={showDrawer}
        >
          发布
        </Button>
        <Avatar
          className={styles.avatar}
          shape="square"
          icon={<UserOutlined />}
        />
      </div>
      <Row gutter={5} className={styles.contextWrap}>
        <Col span={12} className={styles.codeWrap}>
          预览文字
        </Col>
        <Col span={12} className={styles.viewWrap}>
          预览文字
        </Col>
      </Row>

      {/* 发布抽屉 */}
      <Drawer
        title="发布"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="400"
      >
        <Form size="large" layout="vertical">
          <Form.Item
            label="BLOG简介"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <TextArea showCount maxLength={100} placeholder='文章简介......' autoSize={{minRows: 5,maxRows: 8}}/>
          </Form.Item>

          <Form.Item
            label="发布时间"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <DatePicker className={styles.timeWrap} />
          </Form.Item>
          <Form.Item
            label="标签"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={tags}
              onChange={(val) => setTags(val)}
            >
              {tagsList.map((item) => (
                <Option key={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block>
              发布文章
            </Button>
            <Button type="dashed" block>
              暂存草稿
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </main>
  );
};
export default AddArticle;
