import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function SelectSampTarget() {
	const [target, setTarget] = React.useState('Height');

	const handleChange = (event) => {
		setTarget(event.target.value);
	};

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
			<InputLabel id="select-standard-label">SamplingTarget</InputLabel>
			<Select
				labelId="select-standard-label"
				id="select-standard"
				value={target}
				onChange={handleChange}
				label="SamplingTarget"
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value="Height">Height</MenuItem>
				<MenuItem value="Ratio">Ratio</MenuItem>
			</Select>
		</FormControl>
	);
}