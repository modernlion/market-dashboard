import '@styles/components/organism/pagination.scss';
import {useMemo} from 'react';
import classNames from 'classnames';

import {IcLeftChevron, IcLeftSkip, IcRightChevron, IcRightSkip} from '@/styles/icons';
import {globalStyles} from '@/styles/global.color';

import {Text} from '../atom';

interface Props {
	currentPageList: number[];
	pageHandler: (newPage: number) => void;
	page: number;
	perPage: number;
	totalPage: number;
}

function Pagination({currentPageList, pageHandler, page, perPage, totalPage}: Props) {
	const hasNextPageList = page < totalPage;
	const hasPrevPage = page > 1;

	const skippedNextPageNumber = useMemo(() => {
		const lastPageNumber = currentPageList[currentPageList.length - 1];
		return lastPageNumber % perPage === 0 ? lastPageNumber + 1 : lastPageNumber;
	}, [perPage, currentPageList]);

	const skippedPrevPageNumber = useMemo(() => {
		const firstPageNumber = currentPageList[0];

		return firstPageNumber === 1 ? firstPageNumber : firstPageNumber - perPage;
	}, [perPage, currentPageList]);

	return (
		<div className="pagination__container">
			<IcLeftSkip
				color={hasPrevPage ? globalStyles.icon.icon : globalStyles.icon.iconDisabled}
				onClick={() => pageHandler(skippedPrevPageNumber)}
			/>
			<IcLeftChevron
				color={hasPrevPage ? globalStyles.icon.icon : globalStyles.icon.iconDisabled}
				onClick={() => pageHandler(page - 1)}
			/>

			{currentPageList.map((pageNumber) => (
				<div
					className={classNames('pagination__page__text', pageNumber === page ? 'on' : '')}
					onClick={() => pageNumber !== page && pageHandler(pageNumber)}
					key={`current-page-list-${pageNumber}`}>
					<Text variant="body" size="lg" weight="medium">
						{pageNumber}
					</Text>
				</div>
			))}

			<IcRightChevron
				color={hasNextPageList ? globalStyles.icon.icon : globalStyles.icon.iconDisabled}
				onClick={() => pageHandler(page + 1)}
			/>
			<IcRightSkip
				color={hasNextPageList ? globalStyles.icon.icon : globalStyles.icon.iconDisabled}
				onClick={() => pageHandler(skippedNextPageNumber)}
			/>
		</div>
	);
}

export default Pagination;
