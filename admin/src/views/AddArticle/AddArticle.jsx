import { useState, useEffect } from "react";
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
  notification,
} from "antd";
import {
  PlusOutlined,
  SendOutlined,
  CloseOutlined,
  CheckOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { TweenOneGroup } from "rc-tween-one";
import randomcolor from "randomcolores";
import styles from "./AddArticle.module.scss";
import marked from "marked"; // 导入marked
import hljs from "highlight.js"; // 导入高亮插件
import "highlight.js/styles/monokai-sublime.css"; //导入highlight的css
import "moment/locale/zh-cn"; // 时间选择时间格式
import locale from "antd/es/date-picker/locale/zh_CN";
import {
  articleTypeApi,
  postArticleApi,
  saveArticleApi,
  articleInfoApi,
} from "../../api/api";
const AddArticle = (props) => {
  const { Option } = Select;
  // const history = useHistory();
  const { TextArea } = Input;

  /** mark配置*/
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
  const [visible, setVisible] = useState(false); //抽屉显示隐藏
  const [desHTMLContent, setDesHTMLContent] = useState(
    "这里是简介markDown预览"
  ); // 简介HTML内容
  const [desContent, setDesContent] = useState(""); // 简介内容
  const [articleContent, setArticleContent] = useState(""); //文章内容
  const [HTMLContent, setHTMLContent] = useState("这里预览markDown"); // markDown转换后文本

  const [inputVisible, setInputVisible] = useState(false); // 便签文本框是否显示
  const [inputValue, setInputValue] = useState(""); //标签输入框内容
  const [tags, setTags] = useState([]); // 标签列表
  const [articleType, setArticleType] = useState(); // 选中文章类别
  const [typeList, setTypeList] = useState([]); // 文章类别列表
  const [date, setDate] = useState(moment().format("L")); // 发布时间
  const [title, setTitle] = useState(""); // 文字标题
  const [articleOrder, setArticleOrder] = useState(true);

  /**删除标签 */
  const cutTags = (idx) => {
    tags.splice(idx, 1);
    setTags([...tags]);
  };

  /**标签列表 */
  const tagItem = tags.map((item, index) => {
    const tagElem = (
      <Tag
        closable
        key={item.color}
        color={item.color}
        className={styles.tagList}
        onClose={(e) => cutTags(index)}
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
  // const props = {
  //   name: "file",
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   beforeUpload: file => {
  //     this.setState(state => ({
  //       fileList: [...state.fileList, file],
  //     }));
  //     return false;
  //   },
  // };

  /**
   * 获取文本内容
   * @param {Object} e 当前Input dom
   */
  const changeMdContent = (e) => {
    // console.log(e.target.value);
    setArticleContent(e.target.value);
    let html = marked(e.target.value);
    setHTMLContent(html);
  };

  /**
   * 获取简介文本内容
   * @param {Object} e 当前Input dom
   */
  const changeDescContent = (e) => {
    // console.log(e.target.value);
    setDesContent(e.target.value);
    let html = marked(e.target.value);
    setDesHTMLContent(html);
  };

  /**
   * 发布文章
   * @param(Array) tags 文章标签
   * @param(String) desContent 文章简介
   * @param(String) articleContent 内容简介
   * @param(String) title 文章标题
   * @param(String) date  文章发布日期
   * @param(Number) articleType 文章类别
   * @param(Boolean) articleOrder 文章置顶排序
   */
  const postArticle = () => {
    console.log(tags); // 文字标签
    console.log(articleContent); // 文字标签
    console.log(title);
    console.log(date);
    console.log(articleType);
    console.log(articleOrder);
    if (!articleContent) {
      message.info("请填写文章内容~~");
      return;
    } else if (!tags.length) {
      message.info("请输入文章标签~~");
      return;
    }  else if (!title) {
      message.info("请输入文章标题~~");
      return;
    } else if (!articleType) {
      message.info("请输入文章类别~~");
      return;
    }

    /**请求接口 */
    postArticleApi({
      // articleId: "11",
      articleTitle: title,
      articleContent: articleContent,
      articleDesc: desContent,
      articleOrder,
      articleType,
      articleDate: date,
      articleTags: JSON.stringify(tags),
    }).then((res) => {
      console.log(res,'res')
      notification.success({
        message: res.message,
      });
      // 清空数据
      setVisible(false);
      setArticleContent("");
      setInputVisible(false);
      setInputValue("");
      setTags([]);
      setArticleType();
      setTypeList([]);
      setDate("");
      setTitle("");
      setArticleOrder(true);
      setHTMLContent("");
      // setDesContent("");
      // setDesHTMLContent("");
    });
  };

  /**
   * 文章暂存
   * @param {String} title 文章标题
   * @param {String} articleContent 文章内容
   */
  const addDrafts = () => {
    /**内容校验 */
    if (!title) {
      message.info("请输入文章标题~~");
      return;
    } else if (!articleContent) {
      message.info("请填写文章内容~~");
      return;
    }
    /**请求接口 */
    saveArticleApi({
      articleTitle: title,
      articleContent: articleContent,
    }).then((res) => {
      console.log(res.message);
      notification.success({
        message: res.message,
      });
    });
  };

  // 获取文章内容
  const getArticleInfo = async () => {
    if(props.match.params.id) {
    await articleInfoApi(props.match.params.id).then((res) => {
      const result = res[0];
      console.log(result.articleDesc);
      setTitle(result.articleTitle); // 设置文章标题
      setArticleContent(result.articleContent); //设置文章内容
      setHTMLContent(marked(result.articleContent)); // 设置文章markdown
      setDesContent(marked(result.articleDesc)); //设置文章简介内容
      setDesHTMLContent(marked(result.articleDesc)); // 设置文章简介内容markDown
      setTags(result.articleTags); // 设置类型列表
      setArticleType(result.articleType);
      setDate(result.articleDate);
    });
  }
  };


  // 获取文章类型
  const getArticleType = async()=>{
    await articleTypeApi().then((res) => {
      setTypeList(res);
    });
  }
  // 获取文章类型
  useEffect(() => {
    getArticleType();
    getArticleInfo();

  }, [props.match.params.id]);

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
    props.history.goBack();
  };
  return (
    <main>
      <div className={styles.titleWrap}>
        <Input
          className={styles.titleInput}
          placeholder="输入文章标题......"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="link" onClick={backPage}>
          返回
        </Button>
        <Upload>
          <Button type="text" icon={<UploadOutlined />}>
            导入MarkDown
          </Button>
        </Upload>

        <Button
          type="primary"
          shape="round"
          icon={<DeleteOutlined />}
          onClick={addDrafts}
        >
          保存
        </Button>

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
            value={articleContent}
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
            name="descContent"
            rules={[{ required: true, message: "输入BLOG 简介!" }]}
          >
            <TextArea
              showCount
              maxLength={100}
              value={desContent}
              placeholder="BLOG简介......"
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={changeDescContent}
            />
          </Form.Item>
          <Form.Item label="简介预览">
            <div dangerouslySetInnerHTML={{ __html: desHTMLContent }}></div>
          </Form.Item>

          <Form.Item label="发布时间">
            <DatePicker
              locale={locale}
              onChange={(...date) => setDate(date[1])}
            />
          </Form.Item>
          <Form.Item label="文章类别">
            <Select
              defaultValue={articleType}
              placeholder="选择文章类别"
              onChange={(value) => {
                setArticleType(value);
              }}
              allowClear
            >
              {typeList.map((item) => (
                <Option key={item.typeId} value={item.typeId}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="是否置顶显示">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={articleOrder}
              onChange={(checked) => setArticleOrder(checked)}
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
          </Form.Item>
        </Form>
      </Drawer>
    </main>
  );
};
export default AddArticle;
