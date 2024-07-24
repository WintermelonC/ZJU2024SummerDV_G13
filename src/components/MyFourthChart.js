import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';

export default function CompSampMethod() {
	const option = {
		grid: {
			bottom: '5%'
		},
		xAxis: [
			{
				type: 'category',
				data: ['2', '4', '8', '16', '2', '4', '8', '16'],
				name: 'Down\nSampling\nLevel',
				nameGap: 40,
				nameTextStyle: {
					align: 'center'
				}
			},
			{
				type: 'category',
				data: ['Height', 'Ratio'],
				name: 'Model\nName',
				nameGap: 40,
				nameTextStyle: {
					align: 'center'
				},
				axisPointer: {
					type: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: ['#aaa']
					}
				}
			}
		],
		yAxis: {
			type: 'value',
			name: 'MeanError',
			splitNumber: 8,
			splitArea: {
				show: true
			},
			// max: 0.45
		},
		legend: {
			type: 'plain',
			orient: 'vertical',
			left: 'right',
			top: '25%',
			itemGap: 5,
			// itemWidth: 20,
			textStyle: {
				fontSize: 10
			},
		},
		series: [
			{
				type: 'line',
				name: 'ADV\nResNet',
				data: [0.0570, 0.1073, 0.2162, 0.2547],
				lineStyle: {
					color: 'rgb(84, 112, 198)'
				},
			},
			{
				type: 'line',
				name: 'ADV\nResNet',
				data: ['-', '-', '-', '-', 0.0238, 0.0943, 0.1804, 0.2878],
				lineStyle: {
					color: 'rgb(84, 112, 198)'
				},
			},
			{
				type: 'line',
				name: 'COV\nResNet',
				data: [0.0245, 0.0330, 0.0581, 0.1098],
				lineStyle: {
					color: 'rgb(145, 204, 117)'
				},
			},
			{
				type: 'line',
				name: 'COV\nResNet',
				data: ['-', '-', '-', '-', 0.0193, 0.0210, 0.0276, 0.1352],
				lineStyle: {
					color: 'rgb(145, 204, 117)'
				},
			},
			{
				type: 'line',
				name: 'IID\nResNet',
				data: [0.0394, 0.0683, 0.0991, 0.1401],
				lineStyle: {
					color: 'rgb(250, 200, 88)'
				},
			},
			{
				type: 'line',
				name: 'IID\nResNet',
				data: ['-', '-', '-', '-', 0.0194, 0.0219, 0.0419, 0.1658],
				lineStyle: {
					color: 'rgb(250, 200, 88)'
				},
			},
			{
				type: 'line',
				name: 'OOD\nResNet',
				data: [0.0880, 0.1813, 0.2220, 0.2529],
				lineStyle: {
					color: 'rgb(238, 102, 102)'
				},
			},
			{
				type: 'line',
				name: 'OOD\nResNet',
				data: ['-', '-', '-', '-', 0.0977, 0.2465, 0.3275, 0.3890],
				lineStyle: {
					color: 'rgb(238, 102, 102)'
				},
			},

			{
				type: 'line',
				name: 'ADV\nVGG19',
				data: [0.0420, 0.0881, 0.2218, 0.2704],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(84, 112, 198)'
				},
				itemStyle: {
					color: 'rgb(84, 112, 198)'
				}
			},
			{
				type: 'line',
				name: 'ADV\nVGG19',
				data: ['-', '-', '-', '-', 0.0135, 0.0520, 0.1163, 0.2587],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(84, 112, 198)'
				},
				itemStyle: {
					color: 'rgb(84, 112, 198)'
				}
			},
			{
				type: 'line',
				name: 'COV\nVGG19',
				data: [0.0144, 0.0216, 0.0410, 0.0774],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(145, 204, 117)'
				},
				itemStyle: {
					color: 'rgb(145, 204, 117)'
				}
			},
			{
				type: 'line',
				name: 'COV\nVGG19',
				data: ['-', '-', '-', '-', 0.0110, 0.0115, 0.0160, 0.1020],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(145, 204, 117)'
				},
				itemStyle: {
					color: 'rgb(145, 204, 117)'
				}
			},
			{
				type: 'line',
				name: 'IID\nVGG19',
				data: [0.0269, 0.0536, 0.0794, 0.1178],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(250, 200, 88)'
				},
				itemStyle: {
					color: 'rgb(250, 200, 88)'
				}
			},
			{
				type: 'line',
				name: 'IID\nVGG19',
				data: ['-', '-', '-', '-', 0.0114, 0.0136, 0.0247, 0.1216],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(250, 200, 88)'
				},
				itemStyle: {
					color: 'rgb(250, 200, 88)'
				}
			},
			{
				type: 'line',
				name: 'OOD\nVGG19',
				data: [0.0597, 0.1462, 0.2013, 0.2546],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(238, 102, 102)'
				},
				itemStyle: {
					color: 'rgb(238, 102, 102)'
				}
			},
			{
				type: 'line',
				name: 'OOD\nVGG19',
				data: ['-', '-', '-', '-', 0.0732, 0.2361, 0.3211, 0.3823],
				lineStyle: {
					type: 'dashed',
					color: 'rgb(238, 102, 102)'
				},
				itemStyle: {
					color: 'rgb(238, 102, 102)'
				}
			}
		]
	}
	return (
		<React.Fragment>
			<MyTitle>Model Comparison</MyTitle>
			<Box component="div" style={{ flex: 1 }}>
				<EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
			</Box>
		</React.Fragment>
	);
}