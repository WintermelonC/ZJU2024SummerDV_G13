import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';
import PropTypes from 'prop-types';

import GetHeightSeries from './GetHeightSeries';
import GetRatioSeries from './GetRatioSeries';

export default function MyLineChart({ sampTarget }) {
	const option = GetOption(sampTarget);
	return (
		<Box flexGrow={1} sx={{ height: '100%' }}>
			<EChartsReact option={option} style={{ height: '100%' }} notMerge={true} lazyUpdate={true} />
		</Box>
	);
}

function GetOption(sampTarget) {
	let option = {};
	const heightSeriesOption = GetHeightSeries();
	const ratioSeriesOption = GetRatioSeries();
	const xAxisOption = [
		{
			gridIndex: 0,
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
			// name: "Run\nIndex",
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
			gridIndex: 0,
			type: 'category',
			data: ["1", "2", "3", "4", "5"],
			name: "BarChartType",
			nameGap: 26,
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
		},

		{
			gridIndex: 1,
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
			// name: "Run\nIndex",
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
			data: ["ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
			],
			// name: "Model\nName",
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
				show: false,
				margin: 1,
				fontSize: 12,
				interval: 0
			},
			axisTick: {
				show: false,
			},
		},
		{
			gridIndex: 1,
			type: 'category',
			data: ["1", "2", "3", "4", "5"],
			// name: "BarChartType",
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
				show: false,
				margin: 13,
				fontSize: 12,
				fontStyle: 'oblique',
				fontWeight: 'bold'
			},
			axisTick: {
				show: false,
			}
		},

		{
			gridIndex: 2,
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
			// name: "Run\nIndex",
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
			data: ["ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
			],
			// name: "Model\nName",
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
				show: false,
				margin: 1,
				fontSize: 12,
				interval: 0
			},
			axisTick: {
				show: false,
			}
		},
		{
			gridIndex: 2,
			type: 'category',
			data: ["1", "2", "3", "4", "5"],
			// name: "BarChartType",
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
				show: false,
				margin: 13,
				fontSize: 12,
				fontStyle: 'oblique',
				fontWeight: 'bold'
			},
			axisTick: {
				show: false,
			}
		},

		{
			gridIndex: 3,
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
		},
		{
			gridIndex: 3,
			type: 'category',
			data: ["ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
				"ResNet50", "VGG19",
			],
			// name: "Model\nName",
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
				show: false,
				margin: 1,
				fontSize: 12,
				interval: 0
			},
			axisTick: {
				show: false,
			}
		},
		{
			gridIndex: 3,
			type: 'category',
			data: ["1", "2", "3", "4", "5"],
			// name: "BarChartType",
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
				show: false,
				margin: 13,
				fontSize: 12,
				fontStyle: 'oblique',
				fontWeight: 'bold'
			},
			axisTick: {
				show: false,
			}
		},
	];
	const yAxisOption = [
		{
			gridIndex: 0,
			type: 'value',
			splitArea: {
				show: true
			},
			max: 0.55,
			name: "Level\n2",
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
			max: 0.55,
			name: "Level\n4",
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
			max: 0.55,
			name: "Level\n8",
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
			max: 0.55,
			name: "Level\n16",
			nameLocation: 'middle',
			nameRotate: 0,
			nameGap: 50,
			nameTextStyle: {
				fontWeight: 'bold',
				align: 'center'
			},
		},
	];

	switch (sampTarget) {
		case "Height": {
			option = {
				animationDuration: 200,
				grid: [
					{
						top: '16%',
						height: '20%',
					},
					{
						top: '36%',
						height: '20%',
					},
					{
						top: '56%',
						height: '20%',
					},
					{
						top: '76%',
						height: '19%',
					}
				],
				legend: {},
				xAxis: xAxisOption,
				yAxis: yAxisOption,
				series: heightSeriesOption,
			}
			break;
		}
		case "Ratio": {
			option = {
				animationDuration: 200,
				grid: [
					{
						top: '16%',
						height: '20%',
					},
					{
						top: '36%',
						height: '20%',
					},
					{
						top: '56%',
						height: '20%',
					},
					{
						top: '76%',
						height: '19%',
					}
				],
				legend: {},
				xAxis: xAxisOption,
				yAxis: yAxisOption,
				series: ratioSeriesOption,
			}
			break;
		}
	};

	return option;
}

MyLineChart.propTypes = {
	sampTarget: PropTypes.string.isRequired
};