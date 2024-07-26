export default function GetFirstOption() {
	// 第一张图的option配置
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
				name: 'Sampling\nTarget',
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
			max: 0.45
		},
		legend: {
			top: 'top'
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
				let itemsWithValues = [];
				params.forEach(function (item) {
					if (item.value !== '-') {
						itemsWithValues.push(item);
					}
				});

				// 对具有具体数据的项进行排序，从大到小
				itemsWithValues.sort(function (a, b) {
					return b.value - a.value;
				});

				itemsWithValues.forEach(function (item) {
					if (item.value !== '-') {
						if (item.dataIndex >= 0 && item.dataIndex <= 3) {
							if (first) {
								result = 'Height ' + item.axisValueLabel + '<br/>';
								first = false;
							}
							result += item.marker + ' ' + item.seriesName + ': ' + item.value + '<br/>';
						} else {
							if (first) {
								result = 'Ratio ' + item.axisValueLabel + '<br/>';
								first = false;
							}
							result += item.marker + ' ' + item.seriesName + ': ' + item.value + '<br/>';
						}
					}
				});
				return result;
			},
			position: ['10.5%', '18%']
		},
		series: [
			{
				type: 'line',
				name: 'ADV',
				data: [0.0495, 0.0977, 0.2117, 0.2626],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(84, 112, 198)'
				},
				itemStyle: {
					color: 'rgb(84, 112, 198)'
				}
			},
			{
				type: 'line',
				name: 'ADV',
				data: ['-', '-', '-', '-', 0.0186, 0.0731, 0.1484, 0.2732],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(84, 112, 198)'
				},
				itemStyle: {
					color: 'rgb(84, 112, 198)'
				}
			},
			{
				type: 'line',
				name: 'COV',
				data: [0.0195, 0.0273, 0.0495, 0.0936],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(145, 204, 117)'
				},
				itemStyle: {
					color: 'rgb(145, 204, 117)'
				}
			},
			{
				type: 'line',
				name: 'COV',
				data: ['-', '-', '-', '-', 0.0151, 0.0163, 0.0218, 0.1186],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(145, 204, 117)'
				},
				itemStyle: {
					color: 'rgb(145, 204, 117)'
				}
			},
			{
				type: 'line',
				name: 'IID',
				data: [0.0331, 0.0609, 0.0893, 0.1289],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(250, 200, 88)'
				},
				itemStyle: {
					color: 'rgb(250, 200, 88)'
				}
			},
			{
				type: 'line',
				name: 'IID',
				data: ['-', '-', '-', '-', 0.0154, 0.0177, 0.0333, 0.1437],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(250, 200, 88)'
				},
				itemStyle: {
					color: 'rgb(250, 200, 88)'
				}
			},
			{
				type: 'line',
				name: 'OOD',
				data: [0.0738, 0.1638, 0.2117, 0.2537],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(238, 102, 102)'
				},
				itemStyle: {
					color: 'rgb(238, 102, 102)'
				}
			},
			{
				type: 'line',
				name: 'OOD',
				data: ['-', '-', '-', '-', 0.0855, 0.2413, 0.3243, 0.3856],
				symbol: 'circle',
				symbolSize: function (value) {
					return value * 90;
				},
				lineStyle: {
					color: 'rgb(238, 102, 102)'
				},
				itemStyle: {
					color: 'rgb(238, 102, 102)'
				}
			},
			{
				type: 'boxplot',
				name: 'ADV',
				data: [
					{
						value: [0.0136, 0.0239, 0.0359, 0.0510, 0.0906],
					},
					{
						value: [0.0274, 0.0629, 0.0953, 0.1191, 0.1983]
					},
					{
						value: [0.0634, 0.1354, 0.2257, 0.2879, 0.4031]
					},
					{
						value: [0.1251, 0.2305, 0.2569, 0.3178, 0.4028]
					},
					{
						value: [0.0089, 0.0136, 0.0175, 0.0230, 0.0278],
					},
					{
						value: [0.0131, 0.0352, 0.0564, 0.1065, 0.2123]
					},
					{
						value: [0.0301, 0.1161, 0.1438, 0.1822, 0.2592]
					},
					{
						value: [0.0601, 0.1728, 0.2003, 0.3811, 0.5400]
					},
				],
				itemStyle: {
					opacity: 0,
				},
				tooltip: {
					show: false
				}
			},
			{
				type: 'boxplot',
				name: 'COV',
				data: [
					{
						value: [0.0093, 0.0126, 0.0200, 0.0233, 0.0370],
					},
					{
						value: [0.0118, 0.0208, 0.0267, 0.0326, 0.0459]
					},
					{
						value: [0.0192, 0.0352, 0.0482, 0.0627, 0.0968]
					},
					{
						value: [0.0425, 0.0725, 0.0966, 0.1134, 0.1482]
					},
					{
						value: [0.0071, 0.0103, 0.0149, 0.0194, 0.0272],
					},
					{
						value: [0.0077, 0.0106, 0.0174, 0.0212, 0.0284]
					},
					{
						value: [0.0098, 0.0145, 0.0214, 0.0269, 0.0369]
					},
					{
						value: [0.0570, 0.0971, 0.1150, 0.1366, 0.1840]
					},
				],
				itemStyle: {
					opacity: 0,
				},
				tooltip: {
					show: false
				}
			},
			{
				type: 'boxplot',
				name: 'IID',
				data: [
					{
						value: [0.0079, 0.0155, 0.0235, 0.0441, 0.0804],
					},
					{
						value: [0.0117, 0.0290, 0.0474, 0.0993, 0.1407]
					},
					{
						value: [0.0153, 0.0497, 0.0703, 0.1263, 0.2126]
					},
					{
						value: [0.0468, 0.0991, 0.1389, 0.1569, 0.2119]
					},
					{
						value: [0.0077, 0.0105, 0.0155, 0.0197, 0.0260],
					},
					{
						value: [0.0086, 0.0122, 0.0175, 0.0213, 0.0330]
					},
					{
						value: [0.0108, 0.0180, 0.0318, 0.0470, 0.0716]
					},
					{
						value: [0.0504, 0.1143, 0.1512, 0.1644, 0.2349]
					},
				],
				itemStyle: {
					opacity: 0,
				},
				tooltip: {
					show: false
				}
			},
			{
				type: 'boxplot',
				name: 'OOD',
				data: [
					{
						value: [0.0241, 0.0449, 0.0650, 0.0860, 0.1291],
					},
					{
						value: [0.0666, 0.1245, 0.1509, 0.1886, 0.2846]
					},
					{
						value: [0.1579, 0.1892, 0.2019, 0.2290, 0.2885]
					},
					{
						value: [0.1797, 0.2291, 0.2406, 0.2828, 0.3585]
					},
					{
						value: [0.0319, 0.0582, 0.0768, 0.1024, 0.1616],
					},
					{
						value: [0.1261, 0.1949, 0.2276, 0.2659, 0.3700]
					},
					{
						value: [0.2535, 0.3009, 0.3183, 0.3336, 0.3386]
					},
					{
						value: [0.3543, 0.3674, 0.3767, 0.3881, 0.3900]
					},
				],
				itemStyle: {
					opacity: 0,
				},
				tooltip: {
					show: false
				}
			},
		]
	};

	return option;
}