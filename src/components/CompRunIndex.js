import React from 'react';

import MyTitle from './MyTitle';
import SelectSampTarget from './SelectSampTarget';
import SelectSampMethod from './SelectSampMethod';
import BarChart from './BarChart';

export default function CompRunIndex() {
	const [sampTarget, setSampTarget] = React.useState('Ratio');
	const [sampMethod, setSampMethod] = React.useState('IID');

	const handleTargetChange = (value) => {
		setSampTarget(value);
	};
	const handleMethodChange = (value) => {
		setSampMethod(value);
	};

	return (
		<React.Fragment>
			<MyTitle>RunIndex Comparison</MyTitle>
			<SelectSampTarget onTargetChange={handleTargetChange} />
			<SelectSampMethod onTargetChange={handleMethodChange} />
			<BarChart sampTarget={sampTarget} sampMethod={sampMethod} />
		</React.Fragment>
	);
}