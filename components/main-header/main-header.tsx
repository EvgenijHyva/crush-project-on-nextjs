import Link from 'next/link';
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from 'next/image';
import MainHeaderBackround from '@/components/main-header/main-header-background'


export default function MainHeader() {
	return <>
		<MainHeaderBackround />
		<header className={styles.header}>
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
	</>
}