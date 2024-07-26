import React from 'react';
import Box from '@mui/material/Box';
import EChartsReact from 'echarts-for-react';
import PropTypes from 'prop-types';

import GetSecondOption from './GetSecondOption';

export default function MyLineChart({ sampTarget }) {
	// 获取第二张图的option配置
	const option = GetSecondOption(sampTarget);

	return (
		<Box flexGrow={1} sx={{ height: '100%' }}>
			<EChartsReact option={option} style={{ height: '100%' }} notMerge={true} lazyUpdate={true} />
		</Box>
	);
}

MyLineChart.propTypes = {
	sampTarget: PropTypes.string.isRequired
};