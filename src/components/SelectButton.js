import React from "react";
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectButton({ content }) {
	const [option, setOption] = React.useState('');

	const handleChange = (event) => {
		setOption(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 140 }} variant="standard">
			<InputLabel id={`select-${content}-label`} sx={{ fontSize: '12px !important' }}>{content}</InputLabel>
			<CreateOptionList content={content} option={option} handleChange={handleChange} />
		</FormControl>
	);
}

function CreateOptionList({ content, option, handleChange }) {
	const optionList = [];

	if (content === "BarChartType") {
		optionList.push("1", "2", "3", "4", "5");
	} else if (content === "ModelName") {
		optionList.push("VGG19", "ResNet50");
	} else if (content === "SamplingTarget") {
		optionList.push("Height", "Ratio");
	} else if (content === "SamplingMethod") {
		optionList.push("IID", "COV", "ADV", "OOD");
	} else if (content === "DownSamplingLevel") {
		optionList.push("2", "4", "8", "16");
	} else if (content === "RunIndex") {
		optionList.push("0", "1", "2", "3", "4");
	}

	const menuList = optionList.map((option, index) =>
		<MenuItem key={index} value={option}>{option}</MenuItem>);

	return (
		<Select
			labelId={`select-${content}-label`}
			id={`select-${content}`}
			value={option}
			label={content}
			onChange={handleChange}
		>
			<MenuItem value="">
				<em>None</em>
			</MenuItem>
			{menuList}
		</Select>
	);
}

SelectButton.propTypes = {
	content: PropTypes.string,
};

CreateOptionList.propTypes = {
	content: PropTypes.string,
	option: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
};