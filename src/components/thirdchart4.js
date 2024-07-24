import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';
function thirdchart4(){

const option = {
    xAxis: {
        type: 'category', // x 轴类型，可根据数据特点选择
        data: ['2', '4', '8', '16', '2', '4', '8', '16',] // x 轴数据
    },
    yAxis:{

    },
    grid: [
        {
            // 设置 grid 组件离容器上侧的距离，从而为 title 留出空间。
            top: '10%'

            // 可以继续设置其他 grid 属性
        },
    ],
    series: [
        {
            // 第一个折线图的配置，放在第一个 grid 里
        name: '1',
        type: 'line',
        data: [0.617,1.321,1.864,2.256],
        
       
          // 配置系列
        },
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '2',
            type: 'line',
            data: [0.684,1.499,2.055,2.565],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '3',
            type: 'line',
            data: [0.683,1.553,2.132,2.585],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '4',
            type: 'line',
            data: [0.533,1.431,1.891,2.304],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '5',
            type: 'line',
            data: [1.174,2.385,2.641,2.976],
            
          // 配置系列
        } ,
        {
        name: '1',
        type: 'line',
        data: ['-','-','-','-',0.766,2.147,3.179,3.875],
        },
        {
            name: '2',
            type: 'line',
            data: ['-','-','-','-',0.875,2.520,3.248,3.859],
            },
             {
                name: '3',
                type: 'line',
                data: ['-','-','-','-',0.910,2.501,3.252,3.877],
                },
                {
                    name: '4',
                    type: 'line',
                    data: ['-','-','-','-',0.853,2.612,3.351,3.854],
                    },
                    {
                        name: '5',
                        type: 'line',
                        data: ['-','-','-','-',0.870,2.283,3.183,3.818],
                        },
                    ]
    // 可以继续添加更多的 grid 和 series 配置
};
return (
    <React.Fragment>
        <MyTitle>test</MyTitle>
        <Box component="div" style={{ flex: 1 }}>
            <EChartsReact option={ option} style={{ height: '100%', width: '100%' }} />
        </Box>
    </React.Fragment>
);
}

export default  thirdchart4