import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function SelectSampMethod({ onTargetChange }) {
	const [target, setTarget] = React.useState('IID');

	const handleChange = (event) => {
		setTarget(event.target.value);
		onTargetChange(event.target.value);
	};

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
			<InputLabel id="select-standard-label">SamplingMethod</InputLabel>
			<Select
				labelId="select-standard-label"
				id="select-standard"
				value={target}
				onChange={handleChange}
				label="SamplingMethod"
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value="IID">IID</MenuItem>
				<MenuItem value="COV">COV</MenuItem>
				<MenuItem value="ADV">ADV</MenuItem>
				<MenuItem value="OOD">OOD</MenuItem>
			</Select>
		</FormControl>
	);
}

SelectSampMethod.propTypes = {
	onTargetChange: PropTypes.func.isRequired,
};