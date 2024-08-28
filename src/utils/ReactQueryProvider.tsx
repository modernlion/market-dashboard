'use client';

import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';

function ReactQueryProviders({children}: React.PropsWithChildren) {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
					refetchOnWindowFocus: false,
					refetchInterval: 3 * 60 * 1000, // 3분마다 캐시 갱신
					staleTime: 5 * 60 * 1000, // 5분마다 캐시 갱신
				},
			},
		}),
	);

	return (
		<QueryClientProvider client={client}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default ReactQueryProviders;
