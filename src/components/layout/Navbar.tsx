import '@/styles/layout/navbar.scss';
import {IcDefaultAccount} from '@/styles/icons';
import {Text} from '@/components/atom';

function Navbar() {
	return (
		<nav className="navbar">
			<section className="user-profile">
				<Text variant="label" size="md" weight="bold">
					홍길동
				</Text>

				<IcDefaultAccount className="user-profile__icon" />
			</section>
		</nav>
	);
}

export default Navbar;
