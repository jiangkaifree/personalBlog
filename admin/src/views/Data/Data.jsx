import { useState, useEffect } from "react";
import { TinyArea, Progress } from "@ant-design/charts";
import { QuestionOutlined } from "@ant-design/icons";
import styles from "./Data.module.scss";
const Data = () => {
  // console.log(process.env)
  const todayConfig = {
    barWidthRatio: 0.3,
    autoFit: true,
    percent: 0.7,
    color: ["#5B8FF9", "#E8EDF3"],
  };
  const weekConfig = {
    data: [30, 55, 22, 43, 13, 43, 44],
    autoFit: true,
    smooth: true,
    color: "#975fe4",
    line: {
      color: "#975fe4",
    },
    areaStyle: function areaStyle() {
      return {
        fill: "#975fe4",
      };
    },
  };
  return (
    <div className={styles.mainWrap}>
      <div className={styles.totalWrap}>
        <div className={styles.week}>
          <p className={styles.title}>
            本周访问量
            {/* <QuestionOutlined /> */}
          </p>
          <p className={styles.counts}>40000</p>
          <div className={styles.weekChart}>
            <TinyArea {...weekConfig} />
          </div>
        </div>
        <div className={styles.today}>
          <p className={styles.title}>
            今日访问人数
            <QuestionOutlined />
          </p>
          <p className={styles.rateWrap}>
            <span>
              日同比 <span className={styles.rate}>12% </span>
            </span>
            <span>
              周同比 <span className={styles.rate}>11% </span>
            </span>
          </p>
          <div className={styles.todayChart}>
            <Progress {...todayConfig} />
          </div>
          <p className={styles.counts}>29</p>

        </div>
        <div className={styles.total}>
          <p className={styles.title}>总访问量</p>
          
          <div></div>
        </div>
      </div>

      <div className="div"></div>
    </div>
  );
};

export default Data;
