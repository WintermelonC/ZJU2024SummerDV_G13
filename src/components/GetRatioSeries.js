import GetData from './GetData';

export default function GetSeries() {
	const data = GetData();
	const heightSeriesOption = [
		// 第一行
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.R2ADV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.R2COV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.R2IID[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.R2OOD[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		// 第二行
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.R4ADV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.R4COV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.R4IID[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.R4OOD[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		// 第三行
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.R8ADV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.R8COV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.R8IID[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.R8OOD[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		// 第四行
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.R16ADV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.R16COV[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.R16IID[9],
			symbolSize: 0,
			symbol: 'circle',
		},

		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[0],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[1],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[2],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[3],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[4],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[5],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[6],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[7],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[8],
			symbolSize: 0,
			symbol: 'circle',
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.R16OOD[9],
			symbolSize: 0,
			symbol: 'circle',
		},
	];

	return heightSeriesOption;
}