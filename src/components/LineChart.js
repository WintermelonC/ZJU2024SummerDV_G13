import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';
import PropTypes from 'prop-types';

export default function LineChart({ sampTarget }) {
	const option = GetOption(sampTarget);
	const chartHeight = '100px';

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<EChartsReact option={option[0]} style={{ height: chartHeight, width: '100%' }} />
			<EChartsReact option={option[1]} style={{ height: chartHeight, width: '100%' }} />
			<EChartsReact option={option[2]} style={{ height: chartHeight, width: '100%' }} />
			<EChartsReact option={option[3]} style={{ height: chartHeight, width: '100%' }} />
		</Box>
	);
}

function GetOption(sampTarget) {
	let option = [{}, {}, {}, {}];

	switch (sampTarget) {
		case "Height": {
			option[0] = {
				xAxis: [
					{
						type: 'category',
						data: ["0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
							"0", "1", "2", "3", "4",
						],
						name: "Run\nIndex",
						nameGap: 30,
						nameTextStyle: {
							align: 'center'
						},
						// splitLine: {
						// 	show: true,
						// 	lineStyle: {
						// 		color: ['#aaa']
						// 	}
						// },
						// axisLabel: {
						// 	margin: 2
						// }
					},
					{
						type: 'category',
						data: ["ResNet50", "VGG19",
							"ResNet50", "VGG19",
							"ResNet50", "VGG19",
							"ResNet50", "VGG19",
							"ResNet50", "VGG19",
						],
						name: "Model\nName",
						nameGap: 30,
						nameTextStyle: {
							align: 'center'
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#aaa']
							}
						},
						axisLabel: {
							margin: 1,
							fontSize: 12,
							interval: 0
						}
					},
					{
						type: 'category',
						data: ["1", "2", "3", "4", "5"],
						name: "BarChartType",
						nameGap: 30,
						nameTextStyle: {
							align: 'center'
						},
						nameLocation: 'middle',
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#555']
							}
						},
						axisLabel: {
							margin: 13,
							fontSize: 12,
							fontStyle: 'oblique',
							fontWeight: 'bold'
						}
					}
				],
				yAxis: {
					type: 'value',
					// name: 'Level\n2',
					// nameLocation: 'middle',
					// nameRotate: 0,
					// nameGap: 50,
					// nameTextStyle: {
					// 	align: 'center'
					// },
					// splitNumber: 8,
					splitArea: {
						show: true
					},
					// max: 0.55
				},
				// legend: {
				// 	top: 'top',
				// 	// right: 'right',
				// 	// orient: 'vertical'
				// },
				grid: {
					// top: "12%",
					// bottom: "11%",
					// left: '5%',
					// right: '2%',
				},
				series: [
					{
						type: 'line',
						name: 'ADV',
						data: [0.0381, 0.0354, 0.0983, 0.0284, 0.0345],
						// itemStyle: {
						// 	color: 'rgb(78, 121, 167)'
						// }
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							0.0185, 0.0239, 0.0900, 0.0167, 0.0136
						],
						// itemStyle: {
						// 	color: 'rgb(78, 121, 167)'
						// }
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0420, 0.0537, 0.1399, 0.0348, 0.0338
						],
						// itemStyle: {
						// 	color: 'rgb(78, 121, 167)'
						// }
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0294, 0.0325, 0.1192, 0.0213, 0.0173
						],
						// itemStyle: {
						// 	color: 'rgb(78, 121, 167)'
						// }
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0460, 0.0510, 0.1372, 0.0338, 0.0385
						],
						// itemStyle: {
						// 	color: 'rgb(78, 121, 167)'
						// }
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0207, 0.0232, 0.0906, 0.0152, 0.0140
						],
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0390, 0.0433, 0.1372, 0.0310, 0.0304
						],
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0364, 0.0401, 0.1200, 0.0226, 0.0192
						],
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0407, 0.0573, 0.1312, 0.0397, 0.0368
						],
					},
					{
						type: 'line',
						name: 'ADV',
						data: ['-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							'-', '-', '-', '-', '-',
							0.0328, 0.0500, 0.1305, 0.0300, 0.0215
						],
					},
				]
			};
			option[1] = JSON.parse(JSON.stringify(option[0]));
			option[2] = JSON.parse(JSON.stringify(option[0]));
			option[3] = JSON.parse(JSON.stringify(option[0]));

			break;
		};
		case "Ratio": {
			break;
		};
	}

	option[0].xAxis[0].axisLabel = { show: false };
	option[0].xAxis[0].axisTick = { show: false };
	option[0].xAxis[0].name = '';
	option[0].yAxis.axisLabel = { showMinLabel: false };
	option[0].grid.bottom = '0%';
	option[0].grid.top = '25%';

	// option[1].xAxis[0].axisLabel = { show: false };
	// option[1].xAxis[0].axisTick = { show: false };
	option[1].xAxis[0].name = '';
	// option[1].xAxis[1].axisLabel = { show: false };
	// option[1].xAxis[1].axisTick = { show: false };
	option[1].xAxis[1].name = '';
	// option[1].xAxis[2].axisLabel = { show: false };
	// option[1].xAxis[2].axisTick = { show: false };
	option[1].xAxis[2].name = '';
	// option[1].yAxis.name = 'Level\n4';
	option[1].yAxis.axisLabel = { showMaxLabel: false, showMinLabel: false };
	option[1].grid.top = '0%';
	option[1].grid.bottom = '0%';

	// option[2].xAxis[0].axisLabel = { show: false };
	// option[2].xAxis[0].axisTick = { show: false };
	option[2].xAxis[0].name = '';
	// option[2].xAxis[1].axisLabel = { show: false };
	// option[2].xAxis[1].axisTick = { show: false };
	option[2].xAxis[1].name = '';
	// option[2].xAxis[2].axisLabel = { show: false };
	// option[2].xAxis[2].axisTick = { show: false };
	option[2].xAxis[2].name = '';
	// option[2].yAxis.name = 'Level\n8';
	option[2].yAxis.axisLabel = { showMaxLabel: false, showMinLabel: false };
	option[2].grid.top = '0%';
	option[2].grid.bottom = '0%';

	// option[3].xAxis[1].axisLabel = { show: false };
	// option[3].xAxis[1].axisTick = { show: false };
	option[3].xAxis[1].name = '';
	// option[3].xAxis[2].axisLabel = { show: false };
	// option[3].xAxis[2].axisTick = { show: false };
	option[3].xAxis[2].name = '';
	// option[3].yAxis.name = 'Level\n16';
	option[3].yAxis.axisLabel = { showMaxLabel: false };
	option[3].grid.top = '0%';
	option[3].grid.bottom = '17%';

	return option;
}

LineChart.propTypes = {
	sampTarget: PropTypes.string.isRequired
};