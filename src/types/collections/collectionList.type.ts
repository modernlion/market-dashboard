export interface CollectionListProps {
	collectionId: string;
	chainId: string;
	name: string;
	ownerAccountAddress: string;
	nftContractAddress: string;
	minteerContractAddress: string;
	description: string;
	nftTotalSupply: string;
	nftOwners: string;
	createAt: Date;
}
