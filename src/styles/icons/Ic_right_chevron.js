import * as React from 'react';

function Ic_right_chevron(props) {
	return (
		<svg width="36px" height="36px" viewBox="0 0 36 36" fill="none" {...props}>
			<mask
				id="prefix__a"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x={6}
				y={6}
				width={24}
				height={24}>
				<path fill="currentColor" d="M6 6h24v24H6z" />
			</mask>
			<g mask="url(#prefix__a)">
				<path d="M18.946 18l-4.6-4.6 1.054-1.054L21.054 18 15.4 23.654 14.346 22.6l4.6-4.6z" fill="currentColor" />
			</g>
		</svg>
	);
}

const MemoIc_right_chevron = React.memo(Ic_right_chevron);
export default MemoIc_right_chevron;
