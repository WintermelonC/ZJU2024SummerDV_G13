import React from 'react';

import MyTitle from './MyTitle';
import SelectButton from './SelectButton';

export default function CompRunIndex() {
	return (
		<React.Fragment>
			<MyTitle>RunIndex Comparison</MyTitle>
			<SelectButton content="SamplingTarget" />
			<SelectButton content="SamplingMethod" />
		</React.Fragment>
	);
}