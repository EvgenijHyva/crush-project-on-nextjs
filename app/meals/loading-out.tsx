import styles from "./../loading.module.css";

interface LoadingProps {
	children: string | JSX.Element;
}

export default function LoadingConditionally({ children }: LoadingProps) {
	return <h1 className={styles.loading}> {children} </h1>;
}