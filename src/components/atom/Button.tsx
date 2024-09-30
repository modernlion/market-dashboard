'use client';

import classNames from 'classnames';
import {PropsWithChildren} from 'react';
import '@/styles/components/atom/button.scss';

interface Props {
	size?: 's' | 'm';
	clickHandler: () => void;
}

function Button({children, size = 'm', clickHandler}: PropsWithChildren<Props>) {
	return (
		<button className={classNames('button', size)} onClick={clickHandler}>
			{children}
		</button>
	);
}

export default Button;
