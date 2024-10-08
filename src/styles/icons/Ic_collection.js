import * as React from 'react';

function Ic_collection(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 25" fill="none" {...props}>
			<mask
				id="prefix__a"
				style={{
					maskType: 'alpha',
				}}
				maskUnits="userSpaceOnUse"
				x={0}
				y={0}
				width={24}
				height={25}>
				<path fill="#D9D9D9" d="M0 .804h24v24H0z" />
			</mask>
			<g mask="url(#prefix__a)">
				<path
					d="M7.192 11.42L12 3.535l4.808 7.885H7.192zm10.308 11c-1.148 0-2.12-.4-2.918-1.197-.798-.798-1.197-1.771-1.197-2.919 0-1.147.399-2.12 1.197-2.918s1.77-1.197 2.918-1.197c1.148 0 2.12.4 2.918 1.197.798.798 1.197 1.77 1.197 2.918 0 1.148-.399 2.12-1.197 2.919-.798.798-1.77 1.197-2.918 1.197zm-14.115-.5v-7.23h7.23v7.23h-7.23zm14.115-1c.732 0 1.35-.253 1.857-.759.506-.505.759-1.124.759-1.856s-.253-1.352-.759-1.857c-.506-.506-1.125-.76-1.857-.76s-1.35.254-1.857.76c-.506.505-.759 1.124-.759 1.856s.253 1.351.759 1.857 1.125.759 1.857.759zm-12.615-.5h4.23v-4.231h-4.23v4.23zm4.954-10.5h4.322L12 6.443 9.839 9.92z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

const MemoIc_collection = React.memo(Ic_collection);
export default MemoIc_collection;
