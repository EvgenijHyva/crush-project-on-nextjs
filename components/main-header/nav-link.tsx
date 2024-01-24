"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./nav-link.module.css";
import { ReactElement } from 'react';

interface NavLinkProps {
	href: string, children: ReactElement | string
}

export default function NavLink({ href, children }: NavLinkProps): JSX.Element {
	const path = usePathname();
	return (<Link href={href} className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link} >{children}</Link>);
}