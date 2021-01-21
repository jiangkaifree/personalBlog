import { useState, useEffect } from "react";
import { TinyArea, Progress, TinyColumn, Rose } from "@ant-design/charts";
import { QuestionOutlined, RiseOutlined,CaretUpOutlined,CaretDownOutlined} from "@ant-design/icons";
import { Space } from "antd";
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
    data: [12,23,44,22,23,44,55],
    autoFit: true,
    color: "#975fe4",
    line: {
      color: "#975fe4",
    },
    smooth: true,
    tooltip: {
      // title: title,
      customContent: (title,data) => {
        // console.log(data[0].data)
        return `<div>${title}${data}</div>`;
      }
    },
    areaStyle: ()=> {
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
    interactions: [{ type: 'element-active' }],
    label: { offset: -15 },
  };

  return (
    <div className={styles.mainWrap}>
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
              <CaretDownOutlined className={styles.cutIcons}/>
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
          <p >用户喜欢分类</p>
          <div className={styles.totalCharts}>
            <Rose {...roseConfig} />
          </div>
        </div>
      </div>

      <div className="div"></div>
    </div>
  );
};

export default Data;
