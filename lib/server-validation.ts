export const isInvalidText = (text: string): boolean => {
	console.log(text.trim(), !text.trim())
	return !Boolean(text.trim());
}

export const isInvalidEmail = (text: string): boolean => {
	return !text.includes("@");
}

export const isInvalidImage = (image: File): boolean => {
	return !image || image.size === 0;
}