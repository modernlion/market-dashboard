import '@/styles/common/navbar.scss';
import {IcDefaultAccount, IcLogoKonkrit} from '@assets/icons';

function Navbar() {
	return (
		<nav className="navbar">
			<IcLogoKonkrit />

			<section className="user-profile">
				<p className="user-profile__name">홍길동</p>
				<IcDefaultAccount className="user-profile__icon" />
			</section>
		</nav>
	);
}

export default Navbar;
