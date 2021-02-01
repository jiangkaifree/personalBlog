// import { useState, useEffect } from "react";
import {
  TinyArea,
  Progress,
  TinyColumn,
  Rose,
  Line,
  Bar,
} from "@ant-design/charts";
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
      id: 3,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 2323,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 444,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 23213,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
    {
      id: 32323,
      title: "Vue开发的10项骚操作",
      tags: ["Vue", "React", "Js"],
      counts: 220,
    },
  ];

  /**
   * TODO 折线图配置
   */
  const lineConfig = {
    data: [
      {
        name: "Vue.js",
        month: "01月份",
        count: 12,
      },
      {
        name: "Vue.js",
        month: "02月份",
        count: 34,
      },
      {
        name: "Vue.js",
        month: "03月份",
        count: 22,
      },
      {
        name: "Vue.js",
        month: "04月份",
        count: 49,
      },
      {
        name: "Vue.js",
        month: "05月份",
        count: 34,
      },
      {
        name: "Vue.js",
        month: "06",
        count: 19,
      },
      {
        name: "Vue.js",
        month: "07月份",
        count: 20,
      },
      {
        name: "Vue.js",
        month: "08月份",
        count: 9,
      },
      {
        name: "Vue.js",
        month: "09月份",
        count: 18,
      },
      {
        name: "Vue.js",
        month: "10月份",
        count: 13,
      },
      {
        name: "Vue.js",
        month: "11月份",
        count: 12,
      },
      {
        name: "Vue.js",
        month: "12月份",
        count: 25,
      },
      {
        name: "React.js",
        month: "01月份",
        count: 10,
      },
      {
        name: "React.js",
        month: "02月份",
        count: 21,
      },
      {
        name: "React.js",
        month: "03月份",
        count: 22,
      },
      {
        name: "React.js",
        month: "04月份",
        count: 37,
      },
      {
        name: "React.js",
        month: "05月份",
        count: 34,
      },
      {
        name: "React.js",
        month: "06",
        count: 45,
      },
      {
        name: "React.js",
        month: "07月份",
        count: 25,
      },
      {
        name: "React.js",
        month: "08月份",
        count: 19,
      },
      {
        name: "React.js",
        month: "09月份",
        count: 29,
      },
      {
        name: "React.js",
        month: "10月份",
        count: 23,
      },
      {
        name: "React.js",
        month: "11月份",
        count: 11,
      },
      {
        name: "React.js",
        month: "12月份",
        count: 12,
      },
      {
        name: "其他",
        month: "01月份",
        count: 10,
      },
      {
        name: "其他",
        month: "02月份",
        count: 11,
      },
      {
        name: "其他",
        month: "03月份",
        count: 12,
      },
      {
        name: "其他",
        month: "04月份",
        count: 32,
      },
      {
        name: "其他",
        month: "05月份",
        count: 34,
      },
      {
        name: "其他",
        month: "06",
        count: 30,
      },
      {
        name: "其他",
        month: "07月份",
        count: 25,
      },
      {
        name: "其他",
        month: "08月份",
        count: 23,
      },
      {
        name: "其他",
        month: "09月份",
        count: 21,
      },
      {
        name: "其他",
        month: "10月份",
        count: 46,
      },
      {
        name: "其他",
        month: "11月份",
        count: 34,
      },
      {
        name: "其他",
        month: "12月份",
        count: 23,
      },
    ],
    xField: "month",
    yField: "count",
    seriesField: "name",
    interactions: [{ type: "marker-active" }],
    legend: { position: "top" },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  /**
   * TODO 条形图配置
   */
  const barConfig = {
    data: [
      {
        year: "2017 年",
        value: 38,
      },
      {
        year: "2018 年",
        value: 52,
      },
      {
        year: "2019 年",
        value: 61,
      },
      {
        year: "2020 年",
        value: 145,
      },
      {
        year: "2021 年",
        value: 48,
      },
    ],
    xField: "value",
    yField: "year",
    autoFit:true,
    seriesField: "year",
    padding: [20,60],
    legend: { position: "top-right" },
  };

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

 {/* 折线图 */}
 <div className={styles.lineWrap}>
        <div className={styles.lineChart}>
          <Line {...lineConfig} />
        </div>
      </div>


      <div className={styles.latestWrap}>
        <div className={styles.viewWrap}>
          <p className={styles.viewsTitle}>近三天浏览最多</p>
          {viewsCount.map((item, idx) => (
            <Space size={25} key={item.id} className={styles.viewsList}>
              <Badge count={idx + 1} className={styles.index} />

              <p className={styles.title}>{item.title}</p>
              <Space size={0}>
                {item.tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </Space>

              <span className={styles.counts}>{item.counts}</span>
            </Space>
          ))}
        </div>
        <div className={styles.barWrap}>
          <Bar {...barConfig} />
        </div>
      </div>

     
    </section>
  );
};

export default Data;
