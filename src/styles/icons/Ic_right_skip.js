import * as React from 'react';

function Ic_right_skip(props) {
	return (
		<svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
			<path
				d="M16.056 18l-4.585-4.6 1.054-1.054L18.179 18l-5.654 5.654L11.47 22.6l4.585-4.6zm6.35 0l-4.585-4.6 1.054-1.054L24.529 18l-5.654 5.654L17.82 22.6l4.585-4.6z"
				fill="currentColor"
			/>
		</svg>
	);
}

const MemoIc_right_skip = React.memo(Ic_right_skip);
export default MemoIc_right_skip;
