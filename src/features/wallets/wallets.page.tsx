import '@styles/app/wallets.scss';

import React from 'react';
import {TitleSection} from '@/components/molcules';
import WalletListSection from './WalletListSection';

function WalletsPage() {
	return (
		<>
			<TitleSection title="Wallets" desc="desc" />
			<WalletListSection />
		</>
	);
}

export default WalletsPage;
