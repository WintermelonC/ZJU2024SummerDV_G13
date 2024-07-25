import React from 'react';
import Box from '@mui/material/Box';
// import EChartsReact from 'echarts-for-react';
import * as echarts from 'echarts';

import MyTitle from './MyTitle.js';
import GetFirstOption from './GetFirstOption.js';

let ctrlPressed = false;

document.addEventListener('keydown', (event) => {
	if (event.key === 'Control') {
		ctrlPressed = true;
	}
});

document.addEventListener('keyup', (event) => {
	if (event.key === 'Control') {
		ctrlPressed = false;
	}
});

export default function CompSampMethod() {
	const chartRef = React.useRef(null);
	let chartInstance = null;

	const initChart = () => {
		const current = chartRef.current;
		if (current) {
			chartInstance = echarts.init(current);
			const option = GetFirstOption();

			chartInstance.setOption(option);

			chartInstance.on('legendselectchanged', function (event) {
				const selected = event.selected;
				const selectedCount = Object.values(selected).filter(isSelected => isSelected).length;
				// console.log(selectedCount);
				if (ctrlPressed) {
					const selectedName = event.name;
					const updatedSelected = {};

					option.series.forEach(seriesItem => {
						updatedSelected[seriesItem.name] = seriesItem.name === selectedName;
					});

					const updatedSeries = option.series.map(seriesItem => {
						if (seriesItem.name === selectedName) {
							// 确保选中的系列（无论类型）都显示
							return { ...seriesItem, itemStyle: { opacity: 1 }, lineStyle: { opacity: 1 } };
						} else {
							// 未选中的系列透明度设置为0，隐藏
							return { ...seriesItem, itemStyle: { opacity: 0 }, lineStyle: { opacity: 0 } };
						}
					});

					chartInstance.setOption({
						legend: {
							selected: updatedSelected,
						},
						series: updatedSeries
					});
				} else {
					const updatedSeries = option.series.map(seriesItem => {
						// 当只有一个图例被选中时，根据图例选择进行显示或隐藏
						if (selectedCount === 1) {
							if (seriesItem.type === 'boxplot') {
								if (selected[seriesItem.name]) {
									return { ...seriesItem, itemStyle: { opacity: 1 } };
								} else {
									return { ...seriesItem, itemStyle: { opacity: 0 } };
								}
							} else {
								// 对于非 'boxplot' 类型的 series，始终保持显示
								return { ...seriesItem, itemStyle: { opacity: 0.5 }, lineStyle: { opacity: 0.5 } };
							}
						} else {
							if (seriesItem.type === 'boxplot') {
								if (selected[seriesItem.name]) {
									return { ...seriesItem, itemStyle: { opacity: 0 } };
								} else {
									return { ...seriesItem, itemStyle: { opacity: 0 } };
								}
							} else {
								// 对于非 'boxplot' 类型的 series，始终保持显示
								return { ...seriesItem, itemStyle: { opacity: 1 }, lineStyle: { opacity: 1 } };
							}
						}
					});

					chartInstance.setOption({
						series: updatedSeries
					});
				}
			});
		}
	};

	React.useEffect(() => {
		initChart();
		// 组件卸载时，清理资源
		return () => {
			chartInstance && chartInstance.dispose();
		};
	}, []);

	return (
		<React.Fragment>
			<MyTitle>SamplingMethod Comparison: from DownSamplingLevel and SamplingTarget</MyTitle>
			<Box component="div" style={{ flex: 1 }}>
				<div ref={chartRef} style={{ height: '100%', width: '100%' }} />
			</Box>
		</React.Fragment>
	);
}