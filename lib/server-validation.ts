export const isInvalidText = (text: string): boolean => {
	return !!text.trim();
}

export const isInvalidEmail = (text: string): boolean => {
	return !text.includes("@");
}

export const isInvalidImage = (image: File): boolean => {
	return !image || image.size === 0;
}