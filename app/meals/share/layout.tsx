import MainHeader from '@/components/main-header/main-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Share your recipe',
	description: 'Here you can share your recipe by filling this form. All fields is required',
	referrer: "origin-when-cross-origin",
	keywords: ["meal", "meals", "food", "food-app", "app", "recipe", "meal recipe", "food recipe"],
	publisher: null,
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
		url: false,
		date: false
	}
}

export default function ShareLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				{children}
			</body>
		</html>
	)
}