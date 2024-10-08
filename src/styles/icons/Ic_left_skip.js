import * as React from 'react';

function Ic_left_skip(props) {
	return (
		<svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
			<path
				d="M17.125 23.654L11.47 18l5.654-5.654 1.054 1.054-4.585 4.6 4.585 4.6-1.054 1.054zm6.35 0L17.82 18l5.654-5.654 1.054 1.054-4.585 4.6 4.585 4.6-1.054 1.054z"
				fill="currentColor"
			/>
		</svg>
	);
}

const MemoIc_left_skip = React.memo(Ic_left_skip);
export default MemoIc_left_skip;
