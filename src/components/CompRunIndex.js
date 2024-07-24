import React from 'react';

import MyTitle from './MyTitle';
import LineChart from './LineChart';
import SelectSampTarget from './SelectSampTarget';

export default function CompRunIndex() {
	const [sampTarget, setSampTarget] = React.useState('Height');

	const handleTargetChange = (value) => {
		setSampTarget(value);
	};

	return (
		<React.Fragment>
			<MyTitle>RunIndex Comparison</MyTitle>
			<SelectSampTarget onTargetChange={handleTargetChange} />
			<LineChart sampTarget={sampTarget} />
		</React.Fragment>
	);
}