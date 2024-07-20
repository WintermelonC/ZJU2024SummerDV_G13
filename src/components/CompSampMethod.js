import React from 'react';

import MyTitle from './MyTitle';
import SelectButton from './SelectButton';

export default function CompSampMethod() {
	return (
		<React.Fragment>
			<MyTitle>
				Comparing the impact of different Sampling Methods on data under various scenarios
			</MyTitle>
			<SelectButton content="BarChartType" />
		</React.Fragment>
	);
}