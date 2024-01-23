import Link from 'next/link';
import logoImg from "@/assets/logo.png";
import styles from "./main-heade.module.css";
import Image from 'next/image';

export default function MainHeader() {
	return <header className={styles.header}>
		<Link href="/" className={styles.logo}>
			<Image src={logoImg} alt='logo: plate with food on it' priority />
			Food
		</Link>
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/meals">Browse Meals</Link>
				</li>
				<li>
					<Link href="/community">Foodies Community</Link>
				</li>
			</ul>
		</nav>
	</header>
}