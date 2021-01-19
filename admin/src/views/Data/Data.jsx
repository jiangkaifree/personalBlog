import { useState, useEffect } from "react";
import { Area } from "@ant-design/charts";
const Data = () => {
  // console.log(process.env)
  
  const config = {
    data: [
      {
        weekDay: '星期一',
        viewCounts: 20,
      },
      {
        weekDay: '星期二',
        viewCounts: 140,
      },
      {
        weekDay: '星期三',
        viewCounts: 120,
      },
      {
        weekDay: '星期四',
        viewCounts: 86,
      },
      {
        weekDay: '星期五',
        viewCounts: 89,
      },
      {
        weekDay: '星期六',
        viewCounts: 75,
      },
      {
        weekDay: '星期日',
        viewCounts: 100,
      },
    ],
    xField: "weekDay",
    yField: "viewCounts",
    xAxis: { tickCount: 12 },
    areaStyle: function areaStyle() {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
        shadowColor: "#1890ff",
        shadowBlur: 10,
      };
    },
  };
  return (
    <>
      <div className='mainWrap'>
        <div className='div'>
        <Area {...config} />
        </div>
      </div>
      <style jsx>{`
        .mainWrap{
           background-color: #333;
           font-size: 
        }
        .mainWrap > .div{
          background-color: #fff
        }
      `}</style>
    </>
  );
};

export default Data;
