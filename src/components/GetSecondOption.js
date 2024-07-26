import GetHeightSeries from './GetHeightSeries';
import GetRatioSeries from './GetRatioSeries';

export default function GetSecondOption(sampTarget) {
	// 第二张图的option配置
	let option = {};
	const heightSeriesOption = GetHeightSeries();
	const ratioSeriesOption = GetRatioSeries();
	// 配置xAxis
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
			name: "BarChartType\n\n\n\n",
			nameGap: 26,
			nameTextStyle: {
				align: 'center',
				fontWeight: 'bold',
				fontStyle: 'oblique',
				fontSize: 12
			},
			nameLocation: 'end',
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
	// 配置yAxis
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
			axisLabel: {
				fontSize: 10
			}
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
			axisLabel: {
				fontSize: 10
			}
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
			axisLabel: {
				fontSize: 10
			}
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
			axisLabel: {
				fontSize: 10
			}
		},
	];

	// 根据选项卡内容进行选择
	switch (sampTarget) {
		case "Height": {
			option = {
				animationDuration: 400,
				// 4 x 1 网格
				grid: [
					{
						top: '16%',
						height: '19%',
					},
					{
						top: '35%',
						height: '19%',
					},
					{
						top: '54%',
						height: '19%',
					},
					{
						top: '73%',
						height: '19%',
					}
				],
				legend: {},
				xAxis: xAxisOption,
				yAxis: yAxisOption,
				// Height数据
				series: heightSeriesOption,
			}
			break;
		}
		case "Ratio": {
			option = {
				animationDuration: 400,
				// 4 x 1 网格
				grid: [
					{
						top: '16%',
						height: '19%',
					},
					{
						top: '35%',
						height: '19%',
					},
					{
						top: '54%',
						height: '19%',
					},
					{
						top: '73%',
						height: '19%',
					}
				],
				legend: {},
				xAxis: xAxisOption,
				yAxis: yAxisOption,
				// Ratio数据
				series: ratioSeriesOption,
			}
			break;
		}
	};

	return option;
}