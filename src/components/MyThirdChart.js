import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';

export default function MyThirdChart() {
	const option = {
		legend: {},
		grid: [
			{
				top: '10%',
				height: '21%',
			},
			{
				top: '31%',
				height: '21%',
			},
			{
				top: '52%',
				height: '21%',
			},
			{
				top: '73%',
				height: '21%',
			}
		],
		xAxis: [
			{
				gridIndex: 0,
				type: 'category',
				data: ['2', '4', '8', '16', '2', '4', '8', '16'],
				// name: 'Down\nSampling\nLevel',
				nameGap: 30,
				nameTextStyle: {
					align: 'center'
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				}
			},
			{
				gridIndex: 0,
				type: 'category',
				data: ["Height", "Ratio"],
				name: 'Sampling\nTarget',
				nameGap: 40,
				nameTextStyle: {
					align: 'center'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#555']
					}
				},
				axisLabel: {
					margin: 3,
					fontWeight: 'bold',
				},
			},

			{
				gridIndex: 1,
				type: 'category',
				data: ['2', '4', '8', '16', '2', '4', '8', '16'],
				// name: 'Down\nSampling\nLevel',
				nameGap: 30,
				nameTextStyle: {
					align: 'center'
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				}
			},
			{
				gridIndex: 1,
				type: 'category',
				data: ["Height", "Ratio"],
				// name: 'SamplingTarget',
				nameGap: 30,
				nameTextStyle: {
					align: 'center'
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#555']
					}
				},
			},

			{
				gridIndex: 2,
				type: 'category',
				data: ['2', '4', '8', '16', '2', '4', '8', '16'],
				// name: 'Down\nSampling\nLevel',
				nameGap: 30,
				nameTextStyle: {
					align: 'center'
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				}
			},
			{
				gridIndex: 2,
				type: 'category',
				data: ["Height", "Ratio"],
				// name: 'SamplingTarget',
				nameGap: 30,
				nameTextStyle: {
					align: 'center'
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#555']
					}
				},
			},

			{
				gridIndex: 3,
				type: 'category',
				data: ['2', '4', '8', '16', '2', '4', '8', '16'],
				name: 'Down\nSampling\nLevel',
				nameGap: 40,
				nameTextStyle: {
					align: 'center'
				},
			},
			{
				gridIndex: 3,
				type: 'category',
				data: ["Height", "Ratio"],
				// name: 'SamplingTarget',
				nameGap: 30,
				nameTextStyle: {
					align: 'center'
				},
				axisLabel: {
					show: false,
				},
				axisTick: {
					show: false,
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#555']
					}
				},
			},
		],
		yAxis: [
			{
				gridIndex: 0,
				type: 'value',
				splitArea: {
					show: true
				},
				max: 0.4,
				name: "ADV",
				nameLocation: 'middle',
				nameRotate: 0,
				nameGap: 50,
				nameTextStyle: {
					fontWeight: 'bold',
					align: 'center'
				},
			},
			{
				gridIndex: 1,
				type: 'value',
				splitArea: {
					show: true
				},
				max: 0.4,
				axisLabel: {
					showMaxLabel: false
				},
				name: "COV",
				nameLocation: 'middle',
				nameRotate: 0,
				nameGap: 50,
				nameTextStyle: {
					fontWeight: 'bold',
					align: 'center'
				},
			},
			{
				gridIndex: 2,
				type: 'value',
				splitArea: {
					show: true
				},
				max: 0.4,
				axisLabel: {
					showMaxLabel: false
				},
				name: "IID",
				nameLocation: 'middle',
				nameRotate: 0,
				nameGap: 50,
				nameTextStyle: {
					fontWeight: 'bold',
					align: 'center'
				},
			},
			{
				gridIndex: 3,
				type: 'value',
				splitArea: {
					show: true
				},
				max: 0.4,
				axisLabel: {
					showMaxLabel: false
				},
				name: "OOD",
				nameLocation: 'middle',
				nameRotate: 0,
				nameGap: 50,
				nameTextStyle: {
					fontWeight: 'bold',
					align: 'center'
				},
			},
		],
		series: [
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 1',
				data: [0.0397, 0.0670, 0.1728, 0.2982],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 2',
				data: [0.0518, 0.1020, 0.2238, 0.2539],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 3',
				data: [0.0470, 0.1005, 0.2357, 0.2781],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 4',
				data: [0.0519, 0.1118, 0.2386, 0.2998],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 5',
				data: [0.0570, 0.1072, 0.2242, 0.2828],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 1',
				data: ['-', '-', '-', '-', 0.0160, 0.0732, 0.1573, 0.2870],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 2',
				data: ['-', '-', '-', '-', 0.0155, 0.0698, 0.1418, 0.2962],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 3',
				data: ['-', '-', '-', '-', 0.0185, 0.0638, 0.1523, 0.2771],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 4',
				data: ['-', '-', '-', '-', 0.0207, 0.0665, 0.1450, 0.2798],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 0,
				yAxisIndex: 0,
				type: 'line',
				name: 'ChartType 5',
				data: ['-', '-', '-', '-', 0.0225, 0.0924, 0.1454, 0.2261],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 1',
				data: [0.0177, 0.0211, 0.0365, 0.0650],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 2',
				data: [0.0178, 0.0274, 0.0468, 0.0842],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 3',
				data: [0.0195, 0.0284, 0.0522, 0.1087],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 4',
				data: [0.0195, 0.0267, 0.0544, 0.1019],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 5',
				data: [0.0227, 0.0329, 0.0579, 0.1083],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 1',
				data: ['-', '-', '-', '-', 0.0135, 0.0152, 0.0178, 0.0978],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 2',
				data: ['-', '-', '-', '-', 0.0141, 0.0149, 0.0212, 0.1132],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 3',
				data: ['-', '-', '-', '-', 0.0154, 0.0160, 0.0220, 0.1429],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 4',
				data: ['-', '-', '-', '-', 0.0153, 0.0165, 0.0209, 0.1136],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 2,
				yAxisIndex: 1,
				type: 'line',
				name: 'ChartType 5',
				data: ['-', '-', '-', '-', 0.0173, 0.0188, 0.0270, 0.1256],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 1',
				data: [0.0259, 0.0491, 0.0605, 0.0924],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 2',
				data: [0.0339, 0.0639, 0.0937, 0.1227],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 3',
				data: [0.0342, 0.0598, 0.0953, 0.1421],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 4',
				data: [0.0345, 0.0654, 0.0976, 0.1392],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 5',
				data: [0.0372, 0.0665, 0.0992, 0.1483],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 1',
				data: ['-', '-', '-', '-', 0.0138, 0.0158, 0.0292, 0.1538],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 2',
				data: ['-', '-', '-', '-', 0.0130, 0.0147, 0.0307, 0.1538],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 3',
				data: ['-', '-', '-', '-', 0.0162, 0.0176, 0.0282, 0.1286],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 4',
				data: ['-', '-', '-', '-', 0.0154, 0.0177, 0.0353, 0.1442],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 4,
				yAxisIndex: 2,
				type: 'line',
				name: 'ChartType 5',
				data: ['-', '-', '-', '-', 0.0184, 0.0228, 0.0434, 0.1382],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 1',
				data: [0.0617, 0.1321, 0.1864, 0.2256],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 2',
				data: [0.0684, 0.1499, 0.2055, 0.2565],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 3',
				data: [0.0683, 0.1553, 0.2132, 0.2585],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 4',
				data: [0.0533, 0.1431, 0.1891, 0.2304],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 5',
				data: [0.1174, 0.2385, 0.2641, 0.2976],
				symbolSize: 0,
				symbol: 'circle',
			},

			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 1',
				data: ['-', '-', '-', '-', 0.0766, 0.2147, 0.3179, 0.3875],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 2',
				data: ['-', '-', '-', '-', 0.0875, 0.2520, 0.3248, 0.3859],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 3',
				data: ['-', '-', '-', '-', 0.0910, 0.2501, 0.3252, 0.3877],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 4',
				data: ['-', '-', '-', '-', 0.0853, 0.2612, 0.3351, 0.3854],
				symbolSize: 0,
				symbol: 'circle',
			},
			{
				xAxisIndex: 6,
				yAxisIndex: 3,
				type: 'line',
				name: 'ChartType 5',
				data: ['-', '-', '-', '-', 0.0870, 0.2283, 0.3183, 0.3818],
				symbolSize: 0,
				symbol: 'circle',
			},
		]
	}
	return (
		<React.Fragment>
			<MyTitle>SamplingMethod Comparison: from BarChartType</MyTitle>
			<Box component="div" style={{ flex: 1 }}>
				<EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
			</Box>
		</React.Fragment>
	);
}