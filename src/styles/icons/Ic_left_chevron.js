import * as React from 'react';

function Ic_left_chevron(props) {
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
				<path fill="#D9D9D9" d="M6 6h24v24H6z" />
			</mask>
			<g mask="url(#prefix__a)">
				<path d="M20 23.654L14.346 18 20 12.346l1.054 1.054-4.6 4.6 4.6 4.6L20 23.654z" fill="currentColor" />
			</g>
		</svg>
	);
}

const MemoIc_left_chevron = React.memo(Ic_left_chevron);
export default MemoIc_left_chevron;
