import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function MyTitle(props) {
	// 设置标题样式
	return (
		<Typography
			component="h2"
			variant="h6"
			color="primary"
			gutterBottom
			noWrap
			style={{ fontSize: '16px' }}
		>
			{props.children}
		</Typography>
	);
}

MyTitle.propTypes = {
	children: PropTypes.node.isRequired,
};