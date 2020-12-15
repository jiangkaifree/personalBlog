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
  Switch
} from "antd";
import { UserOutlined, SendOutlined ,CloseOutlined, CheckOutlined} from "@ant-design/icons";
import styles from "./AddArticle.module.scss";
import marked from "marked"; // 导入marked
import hljs from "highlight.js"; // 导入高亮插件
import "highlight.js/styles/monokai-sublime.css"; //导入highlight的css
import 'moment/locale/zh-cn';     // 时间选择时间格式
import locale from 'antd/es/date-picker/locale/zh_CN';  
const AddArticle = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [tags, setTags] = useState(["Vue", "React"]);
  const [desHTMLContent, setDesHTMLContent] = useState(
    "这里是简介markDown预览"
  ); // 简介markdown内容
  const [HTMLContent, setHTMLContent] = useState("这里预览markDown"); // markDown转换后文本
  marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  /**
   * 获取文本内容
   * @param {Object} e 当前Input dom
   */
  const changeMdContent = (e) => {
    // console.log(e.target.value);
    let html = marked(e.target.value);
    setHTMLContent(html);
  };

  /**
   * 获取简介文本内容
   * @param {Object} e 当前Input dom
   */
  const changeDescContent = (e) => {
    // console.log(e.target.value);
    let html = marked(e.target.value);
    setDesHTMLContent(html);
  };

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
        <Col span={12}>
          <TextArea
            className={styles.codeWrap}
            placeholder="BLOG内容......"
            onChange={changeMdContent}
          ></TextArea>
        </Col>
        <Col span={12} className={styles.viewWrap}>
          <div dangerouslySetInnerHTML={{ __html: HTMLContent }}>
            {/* {HTMLContent} */}
          </div>
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
        className={styles.drawerWrap}
        getContainer={false}
      >
        <Form size="large" layout="vertical">
          <Form.Item
            label="BLOG简介"
            name="username"
            rules={[{ required: true, message: "输入BLOG 简介!" }]}
          >
            <TextArea
              showCount
              maxLength={100}
              placeholder="BLOG简介......"
              autoSize={{ minRows: 5, maxRows: 8 }}
              onChange={changeDescContent}
            />
          </Form.Item>
          <Form.Item label="简介预览">
            <div dangerouslySetInnerHTML={{ __html: desHTMLContent }}></div>
          </Form.Item>

          <Form.Item
            label="发布时间"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <DatePicker locale={locale}/>
          </Form.Item>
          <Form.Item label="是否置顶">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
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
