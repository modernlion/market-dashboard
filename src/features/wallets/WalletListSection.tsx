'use client';
import React from 'react';

import Table from '@/components/organism/Table';
import {WalletListProps} from '@/types/wallets';
import Pagination from '@/components/organism/Pagination';
import {usePaginationHandler} from '@/hooks';
import {Text} from '@/components/atom';
import {dummyWalletList} from '@/mocks/wallets/walletList.mock';

const WALLET_HEAD_CELL_LIST = ['Address', 'Created at', 'Collections'];

function WalletListSection() {
	/* FIXME: API 통신 후 알맞은 데이터로 변환 */
	const pageDetail = {
		page: 1,
		perPage: 10,
		totalPage: 27,
		totalCount: 273,
	};

	/* TODO:  usePaginationHandler 훅을 밖에서 사용할지 아니면 페이지네이션 컴포넌트에서 사용할지 API 붙이고 결정하기 */
	const {page, perPage, currentPageList, pageHandler} = usePaginationHandler(pageDetail.totalPage);

	return (
		<>
			<Table<WalletListProps> headList={WALLET_HEAD_CELL_LIST} dataList={dummyWalletList} />
			<div className="wallet__pagination__container">
				<Text variant="label" size="md" weight="regular">
					{`${pageDetail.totalCount.toLocaleString()}중 ${perPage * page + 1} - ${perPage * page + perPage}`}
				</Text>

				<Pagination
					currentPageList={currentPageList}
					page={page}
					pageHandler={pageHandler}
					perPage={perPage}
					totalPage={pageDetail.totalPage}
				/>
			</div>
		</>
	);
}

export default WalletListSection;
