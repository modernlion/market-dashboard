import React, {Suspense} from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';

import {CollectionsPage} from '@/features/collections';

function Wallets() {
	return (
		// <ErrorBoundary FallbackComponent={<div>hi</div>} /* onReset={reset} */>
		<Suspense fallback={<div />}>
			<CollectionsPage />
		</Suspense>
		// </ErrorBoundary>
	);
}

export default Wallets;
