import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';

import MyTitle from './MyTitle.js';

export default function CompModelName() {
	const option = {
		xAxis: [
			{
				type: 'category',
				data: ['2', '4', '8', '16', '2', '4', '8', '16'],
				name: 'Down \n Sampling \n Level',
				nameGap: 40,
				nameTextStyle: {
					align: 'center'
				}
			},
			{
				type: 'category',
				data: ['Height', 'Ratio'],
				name: 'Sampling \n Target',
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
			}
		},
		legend: {
			top: 'bottom'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				snap: 'true'
			},
			formatter: function (params) {
				let result;
				let first = true;
				params.forEach(function (item) {
					// 假设我们不想显示名为"IID"的系列数据
					if (item.value !== '-') {
						if (item.dataIndex >= 0 && item.dataIndex <= 3) {
							if (first) {
								result = 'Height ' + item.axisValueLabel + '<br/>';
								first = false;
							}
							result += item.marker + ' ' + item.seriesName + ': ' + item.value + '<br/>';
						} else {
							if (first) {
								result = ' Ratio' + '<br/>';
								first = false;
							}
							result += item.marker + ' ' + item.seriesName + ': ' + item.value + '<br/>';
						}
					}
				});
				return result;
			},
			position: [90, 65]
		},
		series: [
			{
				type: 'line',
				name: 'IID',
				data: [0.0331, 0.0609, 0.0893, 0.1289],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'IID',
				data: ['-', '-', '-', '-', 0.0154, 0.0177, 0.0333, 0.1437],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'COV',
				data: [0.0195, 0.0273, 0.0495, 0.0936],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'COV',
				data: ['-', '-', '-', '-', 0.0151, 0.0163, 0.0218, 0.1186],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'ADV',
				data: [0.0495, 0.0977, 0.2117, 0.2626],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'ADV',
				data: ['-', '-', '-', '-', 0.0186, 0.0731, 0.1484, 0.2732],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'OOD',
				data: [0.0738, 0.1638, 0.2117, 0.2537],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			},
			{
				type: 'line',
				name: 'OOD',
				data: ['-', '-', '-', '-', 0.0855, 0.2413, 0.3243, 0.3856],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				}
			}
		]
	}
	return (
		<React.Fragment>
			<MyTitle>SamplingMethod Comparison</MyTitle>
			<Box component="div" style={{ flex: 1 }}>
				<EChartsReact option={option} style={{ height: '100%', width: '100%' }} />
			</Box>
		</React.Fragment>
	);
}