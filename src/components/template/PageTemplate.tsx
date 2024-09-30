import '@styles/components/template/pageTemplate.scss';
import React, {PropsWithChildren} from 'react';

function PageTemplate({children}: PropsWithChildren) {
	return (
		<main className="page__template">
			<div className="page__template__content">{children}</div>
		</main>
	);
}

export default PageTemplate;
