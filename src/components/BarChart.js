import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';
import PropTypes from 'prop-types';

export default function BarChart({ sampTarget, sampMethod }) {
	const option = GetOption(sampTarget, sampMethod);
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

function GetOption(sampTarget, sampMethod) {
	let option = [{}, {}, {}, {}];

	switch (sampTarget) {
		case "Ratio": {
			switch (sampMethod) {
				case "IID": {
					option[0] = {
						xAxis: [
							{
								type: 'category',
								data: ["ResNet50", "VGG19", "ResNet50", "VGG19", "ResNet50", "VGG19", "ResNet50", "VGG19", "ResNet50", "VGG19"],
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
									margin: 2
								}
							},
							{
								type: 'category',
								data: ["1", "2", "3", "4", "5"],
								name: "\n\n\nBar\nChart\nType",
								nameGap: 30,
								nameTextStyle: {
									align: 'center'
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: ['#222']
									}
								},
								axisLabel: {
									margin: 0
								}
							}
						],
						yAxis: {
							type: 'value',
							name: 'Level\n2',
							nameLocation: 'middle',
							nameRotate: 0,
							nameGap: 50,
							nameTextStyle: {
								align: 'center'
							},
							// splitNumber: 8,
							splitArea: {
								show: true
							},
							max: 0.55
						},
						// legend: {
						// 	top: 'top',
						// 	// right: 'right',
						// 	// orient: 'vertical'
						// },
						grid: {
							top: "12%",
							bottom: "11%",
						},
						series: [
							{
								type: 'bar',
								name: 'Run 0',
								data: [0.0144, 0.0100, 0.0154, 0.0077, 0.0202, 0.0091, 0.0173, 0.0118, 0.0197, 0.0105],
								itemStyle: {
									color: 'rgb(78, 121, 167)'
								}
							},
							{
								type: 'bar',
								name: 'Run 1',
								data: [0.0195, 0.0142, 0.0156, 0.0090, 0.0197, 0.0088, 0.0205, 0.0091, 0.0239, 0.0114],
								itemStyle: {
									color: 'rgb(78, 121, 167)'
								}
							},
							{
								type: 'bar',
								name: 'Run 2',
								data: [0.0162, 0.0107, 0.0160, 0.0096, 0.0199, 0.0114, 0.0201, 0.0109, 0.0243, 0.0161],
								itemStyle: {
									color: 'rgb(78, 121, 167)'
								}
							},
							{
								type: 'bar',
								name: 'Run 3',
								data: [0.0185, 0.0103, 0.0148, 0.0116, 0.0195, 0.0097, 0.0190, 0.0091, 0.0213, 0.0152],
								itemStyle: {
									color: 'rgb(78, 121, 167)'
								}
							},
							{
								type: 'bar',
								name: 'Run 4',
								data: [0.0156, 0.0086, 0.0215, 0.0091, 0.0235, 0.0205, 0.0225, 0.0141, 0.0260, 0.0155],
								itemStyle: {
									color: 'rgb(78, 121, 167)'
								}
							}
						]
					};
					option[1] = JSON.parse(JSON.stringify(option[0]));
					option[2] = JSON.parse(JSON.stringify(option[0]));
					option[3] = JSON.parse(JSON.stringify(option[0]));

					option[0].xAxis[0].axisLabel = { show: false };
					option[0].xAxis[0].name = '';
					option[0].grid.bottom = '0%';

					option[1].xAxis[0].axisLabel = { show: false };
					option[1].xAxis[0].name = '';
					option[1].xAxis[1].axisLabel = { show: false };
					option[1].xAxis[1].name = '';
					option[1].yAxis.name = 'Level\n4';
					option[1].grid.top = '0%';
					option[1].grid.bottom = '0%';

					option[2].xAxis[0].axisLabel = { show: false };
					option[2].xAxis[0].name = '';
					option[2].xAxis[1].axisLabel = { show: false };
					option[2].xAxis[1].name = '';
					option[2].yAxis.name = 'Level\n8';
					option[2].grid.top = '0%';
					option[2].grid.bottom = '0%';

					option[3].xAxis[1].axisLabel = { show: false };
					option[3].xAxis[1].name = '';
					option[3].yAxis.name = 'Level\n16';
					option[3].grid.top = '0%';
				}
			}
		}
	};

	return option;
}

BarChart.propTypes = {
	sampTarget: PropTypes.string.isRequired,
	sampMethod: PropTypes.string.isRequired
};