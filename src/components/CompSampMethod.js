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
			<SelectButton content="ModelName" />
			<SelectButton content="SamplingTarget" />
			<SelectButton content="DownSamplingLevel" />
			<SelectButton content="RunIndex" />
		</React.Fragment>
	);
}