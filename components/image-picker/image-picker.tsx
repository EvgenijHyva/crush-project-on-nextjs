"use client";
import Image from 'next/image';
import styles from "./image-picker.module.css"
import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';

interface ImagePickerProps {
	label: string;
	name: string;
	required?: boolean;
	showRequiredMessage?: boolean;
}

export default function ImagePicker({ label, name, required = false, showRequiredMessage = true }: ImagePickerProps) {
	const [image, setImage] = useState<null | string>(null);
	const imageInputRef = useRef<HTMLInputElement | null>(null);

	const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
		imageInputRef.current?.click();
	}

	const handleImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const { files } = event.target;
		if (!files || !files.length) {
			return
		} else {
			const file = files[0];
			const fileReader = new FileReader();
			fileReader.onload = () => {
				const { result } = fileReader;
				if (typeof result === "string") {
					setImage(result) // generated url
				} else {
					console.log("Reader receive", typeof result);
					setImage(null);
				}
			};
			fileReader.readAsDataURL(file);
		}
	}

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label} &nbsp;{required && showRequiredMessage ? <span className={styles["message-text"]}>* image is required</span> : null} </label>
			<div className={styles.controls}>
				<input
					className={styles.input}
					type="file"
					id={name}
					accept='image/png, image/jpeg'
					name={name}
					ref={imageInputRef}
					onChange={handleImageChange}
					required={required}
				/>
				<button type='button' className={styles.button} onClick={handleClick}>
					<div className={styles.preview}>
						{!image ? <p className={styles["image-not-selected"]}>No image picked yet.</p> : <Image src={image} alt='Selected image' fill />}
					</div>
				</button>
			</div>
		</div>
	);
}