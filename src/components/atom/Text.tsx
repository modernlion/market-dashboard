import '@/styles/components/atom/text.scss';

import React, {PropsWithChildren} from 'react';
import classNames from 'classnames';

type TextColorProps =
	| 'text'
	| 'textSecondary'
	| 'textTertiary'
	| 'textQuaternary'
	| 'textDisabled'
	| 'textInverse'
	| 'textOnBgHover'
	| 'textInfo'
	| 'textSuccess'
	| 'textWarning'
	| 'textError'
	| 'textEmphasis'
	| 'textLink'
	| 'textLinkHover'
	| 'textLinkInverse';

interface Props extends PropsWithChildren {
	variant: 'display' | 'headline' | 'body' | 'label';
	size: 'xl-3' | 'xl-2' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	weight?: 'bold' | 'semiBold' | 'regular' | 'medium' /* label이랑 body만 사용 */;
	className?: string;
	color?: TextColorProps;
	textLine?: number;
}

function Text({children, variant, size, weight, color = 'text', textLine, className}: Props) {
	return variant === 'display' ? (
		<h1 className={classNames('display', color, variant, size, className)}>{children}</h1>
	) : variant === 'headline' ? (
		<h3 className={classNames('headline', color, variant, size, className)}>{children}</h3>
	) : variant === 'body' ? (
		<p className={classNames('body', color, variant, size, weight, className)}>{children}</p>
	) : (
		<span className={classNames('label', color, size, weight, textLine && `line-limit${textLine}`, className)}>
			{children}
		</span>
	);
}

export default Text;
