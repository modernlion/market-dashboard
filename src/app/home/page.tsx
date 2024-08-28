import Home from '@/features/home/Home.page';
import React, {Suspense} from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary';

function HomePage() {
	return (
		// <ErrorBoundary FallbackComponent={<div>hi</div>} /* onReset={reset} */>
		<Suspense fallback={<div />}>
			<Home />
		</Suspense>
		// </ErrorBoundary>
	);
}

export default HomePage;
