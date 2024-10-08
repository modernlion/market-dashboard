'use client';
import React from 'react';

import Table from '@/components/organism/Table';
import {WalletListProps} from '@/types/wallets';
import Pagination from '@/components/organism/Pagination';
import {usePaginationHandler} from '@/hooks';
import {Text} from '@/components/atom';

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
			<Table<WalletListProps> headList={WALLET_HEAD_CELL_LIST} dataList={dummy} />
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

const dummy = [
	{
		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress: 'nft 0X432sdfaofhwuehfs',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd0X3412sd0X432sdfaofhwuehfsdfsadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd0sadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd0',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress:
			'nft 0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress:
			'nft 0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress:
			'nft 0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress:
			'nft 0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
	{
		nftContractAddress:
			'nft 0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd0X432sdfaofhwuehfsdfsadf23412sd',
		createAt: '2024-10-04T06:40:32.393Z',
		collectionCount: '3',
	},
];

// const dummy = [
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// 	{
// 		collectionId: 'lecction idddddd',
// 		chainId: 'chianIDDDDDDDD',
// 		name: 'string name!!@!@#!2',
// 		ownerAccountAddress: 'onwer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		nftContractAddress: 'nft 0X432sdfaofhwuehfsdfsadf23412sd',
// 		minteerContractAddress: 'minteer 0X432sdfaofhwuehfsdfsadf23412sd',
// 		description: 'descrrrr  string',
// 		nftTotalSupply: '1123123213',
// 		nftOwners: 'dh',
// 		createAt: new Date(),
// 	},
// ];

// collections	collectionListResForm[]	조회된 컬렉션 리스트
