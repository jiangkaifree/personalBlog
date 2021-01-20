import { useState } from "react";
import Router from "next/router";
import { List, Card, Divider, Row, Col, Pagination,Tag } from "antd";
import { VideoCameraTwoTone, EyeTwoTone, BellTwoTone } from "@ant-design/icons";
import styles from "../styles/blogList.module.scss"; // 样式
import Header from "components/Header/Header"; // 头部组件

const blogList = ({articleList}) => {
  // 进入详情页面
  const goArticleInfo = (id) => {
    // console.log(process.env.customKey)
    Router.push({
      pathname: "./articlesInfo",
      query: {
        id,
      },
    });
  };
  const [myList, setMyList] = useState([
    {
      id: 1111,
      title: "50元加入小密圈 胖哥带你学一年",
      context:
        "50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。",
    },
    {
      id: 1112,
      title: "React实战视频教程-技术胖Blog开发(更新04集)",
      context:
        "50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。",
    },
    {
      id: 1331,
      title: "React服务端渲染框架Next.js入门(共12集)",
      context:
        "50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。",
    },
    {
      id: 121,
      title: "React Hooks 免费视频教程(共11集)",
      context:
        "50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。",
    },
  ]);
  return (
    <>
      <Header></Header>

      <Row type="flex" justify="center">
        <Col className={styles.left} xs={24} sm={24} md={18} lg={22} xl={18}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
              xl: 3,
              xxl: 3,
            }}
            dataSource={articleList}
            renderItem={(item) => (
              <List.Item className={styles.listWrap}>
                <Card
                  title={item.articleTitle}
                  onClick={() => {
                    goArticleInfo(item.articleId);
                  }}
                >
                  <div className={styles.context}>{item.articleDesc}</div>
                  <Divider orientation="left">
                  {item.articleTags.map((tags, idx) => (
                    <Tag color={tags.color} key={idx}>
                      {tags.title}
                    </Tag>
                  ))}
                  </Divider>
                  <div className={styles.infoWrap}>
                    <span>
                      <BellTwoTone /> {item.articleDate}
                    </span>
                    <span>
                      <VideoCameraTwoTone /> 视频教程
                    </span>
                    <span>
                      <EyeTwoTone /> 5498人
                    </span>
                  </div>
                </Card>
              </List.Item>
            )}
          />

          <Pagination className={styles.pageWrap} defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </>
  );
};

// 获取页面数据
export const getStaticProps = async () => {
  const res = await fetch(process.env.baseURL + "/client/blogList");
  const {data} = await res.json();
  console.log(data)
  return {
    props: {
      articleList: data,
    },
  };
};



export default blogList;
