import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function OverallRepre() {
	return (
		<Box
			height={200}
			width={200}
			my={0}
			display="flex"
			alignItems="center"
			gap={4}
			p={1}
			sx={{
				border: '1px solid grey',
				display: 'flex',
				flexWrap: 'wrap',
				'& > :not(style)': {
					m: 1,
					width: 128,
					height: 128,
				},
			}}
		>
			<Paper />
		</Box>
	);
}