// 1. 导入必要的库
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function CompModelName() {
	// 2. 设置组件状态来存储CSV数据
	const [data, setData] = useState([]);

	// 3. 使用useEffect钩子读取和解析CSV文件
	useEffect(() => {
		const filepath = '../csv/model_mean_error.csv'; // CSV文件路径
		fetch(filepath)
			.then(response => response.text())
			.then(csvText => {
				Papa.parse(csvText, {
					header: true, // 将第一行作为字段名
					complete: (result) => {
						setData(result.data); // 存储解析后的数据
					},
				});
			})
			.catch(error => console.error('Error reading CSV file:', error));
	}, []);

	// 4. 渲染表格
	return (
		<table>
			<thead>
				<tr>
					{data[0] && Object.keys(data[0]).map((header) => <th key={header}>{header}</th>)}
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => (
					<tr key={index}>
						{Object.values(row).map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
					</tr>
				))}
			</tbody>
		</table>
	);
}