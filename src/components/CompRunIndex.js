import React from 'react';

import MyTitle from './MyTitle';
import MyLineChart from './MyLineChart';
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
			<MyLineChart sampTarget={sampTarget} />
		</React.Fragment>
	);
}