import Getdata from './GetData';

export default function GetSeries() {
	const data = Getdata();
	const heightSeriesOption = [
		// 第一行
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'ADV',
			data: data.H2ADV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'COV',
			data: data.H2COV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'IID',
			data: data.H2IID[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 0,
			yAxisIndex: 0,
			type: 'line',
			name: 'OOD',
			data: data.H2OOD[9],
			symbolSize: 0
		},

		// 第二行
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'ADV',
			data: data.H4ADV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'COV',
			data: data.H4COV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'IID',
			data: data.H4IID[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 3,
			yAxisIndex: 1,
			type: 'line',
			name: 'OOD',
			data: data.H4OOD[9],
			symbolSize: 0
		},

		// 第三行
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'ADV',
			data: data.H8ADV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'COV',
			data: data.H8COV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'IID',
			data: data.H8IID[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 6,
			yAxisIndex: 2,
			type: 'line',
			name: 'OOD',
			data: data.H8OOD[9],
			symbolSize: 0
		},

		// 第四行
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'ADV',
			data: data.H16ADV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'COV',
			data: data.H16COV[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'IID',
			data: data.H16IID[9],
			symbolSize: 0
		},

		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[0],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[1],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[2],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[3],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[4],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[5],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[6],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[7],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[8],
			symbolSize: 0
		},
		{
			xAxisIndex: 9,
			yAxisIndex: 3,
			type: 'line',
			name: 'OOD',
			data: data.H16OOD[9],
			symbolSize: 0
		},
	];

	return heightSeriesOption;
}