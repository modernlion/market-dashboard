import {useEffect, useMemo, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

import {defaultWalletQueryParams} from '@/constants/wallets';

const usePaginationHandler = (totalPage: number) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentQueryParams = Object.fromEntries(searchParams.entries());

	const [prevPage, setPrevPage] = useState<number>(0);
	const [currentPageList, setCurrentPageList] = useState<number[]>([]);

	const page = Number(currentQueryParams['page']);
	const perPage = Number(currentQueryParams['perPage']);

	const pageHandler = (newPage: number) => {
		if (newPage > totalPage || newPage === 0) {
			return;
		}

		if (newPage >= 1) {
			setPrevPage(page);
			const newQuery = {
				...currentQueryParams,
				page: newPage.toString(),
			};

			const newQueryParams = new URLSearchParams(newQuery);

			return router.push(`${pathname}?${newQueryParams}`);
		}
	};

	const generateNewPaginationListHandler = () => {
		const result: number[] = [];
		const firstPageNumber = Math.floor(page / perPage) * 10 + 1;

		const isLastPage = page % 10 === 0;

		const showNextPageList = !isLastPage && page - prevPage > 0;
		const showPrevPageList = isLastPage && page - prevPage < 0;

		if (showNextPageList || page % perPage === 1) {
			const maxPage = firstPageNumber + 9 < totalPage ? firstPageNumber + 9 : totalPage;

			for (let i = firstPageNumber; i <= maxPage; i++) {
				result.push(i);
			}

			return setCurrentPageList([...result]);
		}

		if (showPrevPageList) {
			for (let i = firstPageNumber - 10; i < firstPageNumber; i++) {
				result.push(i);
			}

			return setCurrentPageList([...result]);
		}
	};

	useEffect(() => {
		generateNewPaginationListHandler();
	}, [page, perPage]);

	useEffect(() => {
		/* 쿼리 파람스 없이 페이지에 접근시, 디폴트 쿼리 설정 */
		if (!page || !perPage) {
			const queryParams = new URLSearchParams(defaultWalletQueryParams);
			router.push(`${pathname}?${queryParams}`);
		}
	}, []);

	return {
		page,
		perPage,
		currentPageList,
		pageHandler,
		prevPage,
		pageDetail: currentQueryParams,
	};
};

export default usePaginationHandler;
