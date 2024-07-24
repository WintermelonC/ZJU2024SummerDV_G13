
import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';
function ThirdChart() {

	const option = {
		xAxis: {
			type: 'category', // x 轴类型，可根据数据特点选择
			data: ['2', '4', '8', '16', '2', '4', '8', '16',] // x 轴数据
		},
		yAxis: {

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
				data: [0.397, 0.670, 1.728, 1.982],


				// 配置系列
			},
			{
				// 第二个折线图的配置，放在第二个 grid 里
				name: '2',
				type: 'line',
				data: [0.518, 1.020, 2.238, 2.539],

				// 配置系列
			},
			{
				// 第二个折线图的配置，放在第二个 grid 里
				name: '3',
				type: 'line',
				data: [0.470, 1.005, 2.357, 2.781],

				// 配置系列
			},
			{
				// 第二个折线图的配置，放在第二个 grid 里
				name: '4',
				type: 'line',
				data: [0.519, 1.118, 2.386, 2.998],

				// 配置系列
			},
			{
				// 第二个折线图的配置，放在第二个 grid 里
				name: '5',
				type: 'line',
				data: [0.570, 1.072, 2.242, 2.828],

				// 配置系列
			},
			{
				name: '1',
				type: 'line',
				data: ['-', '-', '-', '-', 0.160, 0.732, 1.573, 2.870],
			},
			{
				name: '2',
				type: 'line',
				data: ['-', '-', '-', '-', 0.155, 0.698, 1.418, 2.962],
			},
			{
				name: '3',
				type: 'line',
				data: ['-', '-', '-', '-', 0.185, 0.638, 1.523, 2.771],
			},
			{
				name: '4',
				type: 'line',
				data: ['-', '-', '-', '-', 0.207, 0.665, 1.450, 2.798],
			},
			{
				name: '5',
				type: 'line',
				data: ['-', '-', '-', '-', 0.225, 0.924, 1.454, 2.261],
			},
		]
		// 可以继续添加更多的 grid 和 series 配置
	};
	return (
		<React.Fragment>
			<MyTitle>test</MyTitle>
			<Box component="div" style={{ flex: 1 }}>
				<EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
			</Box>
		</React.Fragment>
	);
}

export default ThirdChart;