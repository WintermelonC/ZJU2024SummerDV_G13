import React from 'react';

import MyTitle from './MyTitle';
import MyLineChart from './MyLineChart';
import SelectSampTarget from './SelectSampTarget';

export default function CompRunIndex() {
	const [sampTarget, setSampTarget] = React.useState('Height');

	// 回调函数，获取SelectSampTarget组件的state值
	const handleTargetChange = (value) => {
		setSampTarget(value);
	};

	return (
		<React.Fragment>
			<MyTitle>SamplingMethod Comparison: from RunIndex</MyTitle>
			<SelectSampTarget onTargetChange={handleTargetChange} />
			<MyLineChart sampTarget={sampTarget} />
		</React.Fragment>
	);
}