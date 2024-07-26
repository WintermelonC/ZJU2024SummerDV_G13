import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function SelectSampTarget({ onTargetChange }) {
	const [target, setTarget] = React.useState('Height');

	const handleChange = (event) => {
		setTarget(event.target.value);
		// 向父组件回调state值
		onTargetChange(event.target.value);
	};

	// 选项卡设置
	return (
		<FormControl variant="standard" sx={{ m: 1, width: 140 }}>
			<InputLabel id="select-standard-label" size='small'>SamplingTarget</InputLabel>
			<Select
				labelId="select-standard-label"
				id="select-standard"
				value={target}
				onChange={handleChange}
				label="SamplingTarget"
			>
				<MenuItem value="Height">Height</MenuItem>
				<MenuItem value="Ratio">Ratio</MenuItem>
			</Select>
		</FormControl>
	);
}

SelectSampTarget.propTypes = {
	onTargetChange: PropTypes.func.isRequired,
};