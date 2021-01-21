import { useState, useEffect } from "react";
import { TinyArea, Progress, TinyColumn, Rose } from "@ant-design/charts";
import {
  QuestionOutlined,
  RiseOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Tag, Badge, Space } from "antd";
import styles from "./Data.module.scss";
const Data = () => {
  // console.log(process.env)
  // 今日数据配置
  const todayConfig = {
    barWidthRatio: 0.3,
    autoFit: true,
    percent: 0.7,
    color: ["#5B8FF9", "#E8EDF3"],
  };

  // 周数据配置
  const weekConfig = {
    // data: [{
    //   title: '星期一',
    //   value: 30
    // }, {
    //   title: '星期一',
    //   value: 30
    // }, {
    //   title: '星期一',
    //   value: 30
    // }, {
    //   title: '星期一',
    //   value: 30
    // }, {
    //   title: '星期一',
    //   value: 30
    // }, {
    //   title: '星期一',
    //   value: 30
    // }, {
    //   title: '星期一',
    //   value: 30
    // }],
    data: [12, 23, 44, 22, 23, 44, 55],
    autoFit: true,
    color: "#975fe4",
    line: {
      color: "#975fe4",
    },
    smooth: true,
    tooltip: {
      // title: title,
      customContent: (title, data) => {
        // console.log(data[0].data)
        return `<div>${title}${data}</div>`;
      },
    },
    areaStyle: () => {
      return {
        fill: "#975fe4",
      };
    },
  };

  // 迷你柱状图配置
  const miniConfig = {
    height: 64,
    width: 240,
    autoFit: false,
    data: [274, 337, 81, 497, 666, 219, 269],
    color: "#22a6b3",
    tooltip: {
      customContent: function customContent(x, data) {
        var _data$, _data$$data;
        return "NO."
          .concat(x, ": ")
          .concat(
            (_data$ = data[0]) === null || _data$ === void 0
              ? void 0
              : (_data$$data = _data$.data) === null || _data$$data === void 0
              ? void 0
              : _data$$data.y.toFixed(2)
          );
      },
    },
  };

  // 迷你玫瑰图配置
  const roseConfig = {
    data: [
      {
        type: "分类一",
        value: 27,
      },
      {
        type: "分类二",
        value: 25,
      },
      {
        type: "分类三",
        value: 18,
      },
      {
        type: "分类四",
        value: 15,
      },
    ],
    xField: "type",
    yField: "value",
    autoFit: true,
    seriesField: "type",
    radius: 0.9,
    legend: false,
    state: {
      active: {
        style: {
          lineWidth: 1,
          fillOpacity: 0.65,
        },
      },
    },
    interactions: [{ type: "element-active" }],
    label: { offset: -15 },
  };

  // 近三天浏览最多数据
  const viewsCount = [
    {
      id: 2222,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 2222,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 2222,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 2222,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 2222,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 2222,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
  ];

  return (
    <section className={styles.mainWrap}>
      <div className={styles.totalWrap}>
        <div className={styles.week}>
          <p className={styles.title}>
            本周访问量
            {/* <QuestionOutlined /> */}
          </p>
          <div className={styles.rateWrap}>
            <p className={styles.counts}>40000</p>
            <p>
              比上周 <span className={styles.rate}>12% </span>
            </p>
          </div>
          <div className={styles.weekChart}>
            <TinyArea {...weekConfig} />
          </div>
        </div>
        <div className={styles.today}>
          <p className={styles.title}>
            今日访问人数
            <QuestionOutlined />
          </p>
          <p className={styles.counts}>29</p>
          <div className={styles.todayChart}>
            <Progress {...todayConfig} />
          </div>
          <p className={styles.rateWrap}>
            <span>
              日同比 <span className={styles.upRate}>12% </span>
              <CaretUpOutlined className={styles.upIcons} />
            </span>
            <span>
              周同比 <span className={styles.cutRate}>-11% </span>
              <CaretDownOutlined className={styles.cutIcons} />
            </span>
          </p>
        </div>
        <div className={styles.total}>
          <p className={styles.title}>总访问量</p>
          <Space className={styles.counts} size={85}>
            100000
            <RiseOutlined className={styles.upSize} />
          </Space>
          <div>
            <TinyColumn {...miniConfig} />
          </div>
        </div>
        <div className={styles.like}>
          <p>用户喜欢分类</p>
          <div className={styles.totalCharts}>
            <Rose {...roseConfig} />
          </div>
        </div>
      </div>

      <div className={styles.latestWrap}>
        <div className={styles.viewWrap}>
          <p className={styles.viewsTitle}>近三天浏览最多</p>
          {viewsCount.map((item, idx) => (
            <Space size={25} key={item.id} className={styles.viewsList}>
              <Badge count={idx + 1} className={styles.index}  />

              <p className={styles.title}>{item.title}</p>
              <Space size={0} >
                {item.tags.map((tag) => (
                  <Tag color="blue" key={tag}>{tag}</Tag>
                ))}
              </Space>

              <span className={styles.counts}>{item.counts}</span>
            </Space>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
