import React, {Suspense} from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';

import {WalletsPage} from '@/features/wallets';

function Collections() {
	return (
		// <ErrorBoundary FallbackComponent={<div>hi</div>} /* onReset={reset} */>
		<Suspense fallback={<div />}>
			<WalletsPage />
		</Suspense>
		// </ErrorBoundary>
	);
}

export default Collections;
