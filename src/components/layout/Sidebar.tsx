'use client';
import '@/styles/layout/sidebar.scss';
import {IcCollection, IcLogoKonkrit, IcWallet} from '@assets/icons';
import classNames from 'classnames';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Text} from '@/components/atom';
import {globalStyles} from '@/styles/global.color';

const MENU_LIST = [
	{
		icon: (color: string) => <IcWallet width={24} height={24} color={color} />,
		text: 'Wallets',
		subMenu: [],
	},
	{
		icon: (color: string) => <IcCollection width={24} height={24} color={color} />,
		text: 'Collections',
		subMenu: [],
	},
];

function Sidebar() {
	const currentPath = usePathname();

	const isActive = (menuText: string) => {
		const currentPathList = currentPath.split('/').filter((text) => text);

		return menuText.toLowerCase() === currentPathList[0];
	};

	const activeColor = globalStyles.text.text;
	const inActiveColor = globalStyles.text.textSecondary;

	return (
		<section className="sidebar">
			<Link href={`/wallets`}>
				<div className="konkrit__logo">
					<IcLogoKonkrit />
				</div>
			</Link>

			<ul className="menu">
				{MENU_LIST.map(({icon, text, subMenu}) => (
					<li className="menu__list" key={text}>
						<Link href={`/${text.toLowerCase()}`}>
							<div className={classNames('menu__list__box', isActive(text) && 'active')}>
								{icon(isActive(text) ? activeColor : inActiveColor)}

								<Text variant="label" size="lg" weight="bold" color={isActive(text) ? 'text' : 'textSecondary'}>
									{text}
								</Text>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Sidebar;
