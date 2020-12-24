import { useState,useEffect} from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Drawer,
  Form,
  DatePicker,
  Switch,
  Tag,
  Upload,
  message,
  Select,
} from "antd";
import {
  PlusOutlined,
  SendOutlined,
  CloseOutlined,
  CheckOutlined,
  UploadOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { TweenOneGroup } from "rc-tween-one";
import randomcolor from "randomcolores";
import styles from "./AddArticle.module.scss";
import marked   from "marked"; // 导入marked
import hljs from "highlight.js"; // 导入高亮插件
import "highlight.js/styles/monokai-sublime.css"; //导入highlight的css
import "moment/locale/zh-cn"; // 时间选择时间格式
import locale from "antd/es/date-picker/locale/zh_CN";
import { articleTypeApi } from "../../api/api";
const AddArticle = () => {
  const { Option } = Select;
  const history = useHistory();
  const { TextArea } = Input;
  const [visible, setVisible] = useState(false);
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

  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [articleType,setArticleType] = useState()  // 选中文章类别
  const [typeList,setTypeList] = useState([])

  const tagItem = tags.map((item) => {
    const tagElem = (
      <Tag
        closable
        key={item.color}
        color={item.color}
        className={styles.tagList}
      >
        {item.title}
      </Tag>
    );
    return <span key={item.title}>{tagElem}</span>;
  });

  // 点击Tag展示输入框
  const showInput = () => {
    setInputVisible(true);
  };

  // Tag输入框失焦或者回车事件
  const handleInputConfirm = () => {
    // for (let item of tags) {
    if (inputValue) {
      // console.log(item,inputValue);
      const hexcolor = randomcolor.HEXColor;
      tags.push({
        title: inputValue,
        color: hexcolor(),
      });
      setInputVisible(false);
      setTags(tags);
      setInputValue("");
      console.log(tags);
      // return;
    }
    // }
    // if (inputValue && tags.indexOf(inputValue) === -1) {
    // const hexcolor = randomcolor.HEXColor;
    // tags.push( {
    //   title: inputValue,
    //   color: hexcolor(),
    // });
    // setInputVisible(false);
    // setTags(tags);
    // setInputValue("");
    // console.log(tags);
    // }
  };

  // 导入markDown
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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

  // 发布文章
  const postArticle = ()=> {
    articleTypeApi().then(res => {
      console.log(res,'res')
      setTypeList(res)
      // const typeList = res
    })
  }

  // 获取文章类型
  useEffect(()=>{
    articleTypeApi().then(res => {
      // console.log(res,'res')
      setTypeList(res)
    })
  },[])

  //  开启Drawer
  const showDrawer = () => {
    setVisible(true);
  };

  //  关闭Drawer
  const onClose = () => {
    setVisible(false);
  };

  // 返回上一页
  const backPage = () => {
    history.goBack();
  };
  return (
    <main>
      <div className={styles.titleWrap}>
        <Input className={styles.titleInput} placeholder="输入文章标题......" />
        <Button type="link" onClick={backPage}>
          返回
        </Button>
        <Upload {...props}>
          <Button type="text" icon={<UploadOutlined />}>
            导入MarkDown
          </Button>
        </Upload>
        <Button type="primary" shape="round"  icon={<DeleteOutlined />}  >草稿</Button>

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
            <DatePicker locale={locale} />
          </Form.Item>
          <Form.Item>
            <Select defaultValue={articleType}   placeholder='选择文章类别' onChange={(value)=>{setArticleType(value)}} allowClear>
              {
                typeList.map(item => (
                  <Option key={item.typeId} value={item.typeId}>{item.title}</Option> 
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item label="是否置顶显示">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Form.Item>

          <Form.Item label="文章标签">
            <TweenOneGroup
              enter={{
                scale: 0.8,
                opacity: 0,
                type: "from",
                duration: 400,
                onComplete: (e) => {
                  e.target.style = "";
                },
              }}
              leave={{ opacity: 0, width: 0, scale: 0, duration: 400 }}
              appear={false}
            >
              {tagItem}
            </TweenOneGroup>
            {/* {tags.map((item) => (
              
                 <Tag closable key={item.color} color={item.color}>
                {item.title}
              </Tag> 
            
            ))} */}
            {inputVisible && (
              <Input
                // ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
                className={styles.addTag}
              />
            )}
            {!inputVisible && (
              <Tag onClick={showInput} className={styles.addTag}>
                <PlusOutlined /> New Tag
              </Tag>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" block onClick={postArticle}>
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
