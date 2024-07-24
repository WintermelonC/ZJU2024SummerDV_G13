import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';
function thirdchart3(){

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
        data: [0.259,0.491,0.605,0.924],
        
       
          // 配置系列
        },
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '2',
            type: 'line',
            data: [0.339,0.639,0.937,1.227],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '3',
            type: 'line',
            data: [0.342,0.598,0.953,1.421],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '4',
            type: 'line',
            data: [0.345,0.654,0.976,1.392],
            
          // 配置系列
        } ,
        {
            // 第二个折线图的配置，放在第二个 grid 里
            name: '5',
            type: 'line',
            data: [0.372,0.665,0.992,1.483],
            
          // 配置系列
        } ,
        {
        name: '1',
        type: 'line',
        data: ['-','-','-','-',0.138,0.158,0.292,1.538],
        },
        {
            name: '2',
            type: 'line',
            data: ['-','-','-','-',0.130,0.147,0.307,1.538],
            },
             {
                name: '3',
                type: 'line',
                data: ['-','-','-','-',0.162,0.176,0.282,1.286],
                },
                {
                    name: '4',
                    type: 'line',
                    data: ['-','-','-','-',0.154,0.177,0.353,1.442],
                    },
                    {
                        name: '5',
                        type: 'line',
                        data: ['-','-','-','-',0.184,0.228,0.434,1.382],
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

export default  thirdchart3