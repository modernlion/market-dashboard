import * as React from 'react';

function Ic_wallet(props) {
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
					d="M20.5 8.833H19V5.804H5v14h14v-3.029h1.5v4.53h-17v-17h17v4.528zm-9 8.471v-9h10v9h-10zm4.5-3c.417 0 .77-.146 1.063-.437.291-.292.437-.646.437-1.063 0-.417-.146-.77-.438-1.062A1.446 1.446 0 0016 11.304c-.417 0-.77.146-1.063.438a1.446 1.446 0 00-.437 1.062c0 .417.146.771.438 1.063.291.291.645.437 1.062.437zm4 1.5v-6h-7v6h7z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

const MemoIc_wallet = React.memo(Ic_wallet);
export default MemoIc_wallet;
