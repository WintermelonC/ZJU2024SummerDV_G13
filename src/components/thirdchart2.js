import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';
function thirdchart2(){

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
            top: '20%'

            // 可以继续设置其他 grid 属性
        },
    ],
    series: [
        {
            // 第一个折线图的配置，放在第一个 grid 里
        name: '1',
        type: 'line',
        data: [0.177,0.211,0.365,0.650],
        
       
          // 配置系列
        },
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '2',
            type: 'line',
            data: [0.178,0.274,0.468,0.842],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '3',
            type: 'line',
            data: [0.195,0.284,0.522,1.087],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '4',
            type: 'line',
            data: [0.195,0.267,0.544,1.019],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '5',
            type: 'line',
            data: [0.227,0.329,0.579,1.083],
            
          // 配置系列
        } ,
        {
        name: '1',
        type: 'line',
        data: ['-','-','-','-',0.135,0.152,0.178,0.978],
        },
        {
            name: '2',
            type: 'line',
            data: ['-','-','-','-',0.141,0.149,0.212,1.132],
            },
             {
                name: '3',
                type: 'line',
                data: ['-','-','-','-',0.154,0.160,0.220,1.429],
                },
                {
                    name: '4',
                    type: 'line',
                    data: ['-','-','-','-',0.153,0.165,0.209,1.136],
                    },
                    {
                        name: '5',
                        type: 'line',
                        data: ['-','-','-','-',0.173,0.188,0.270,1.256],
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

export default  thirdchart2