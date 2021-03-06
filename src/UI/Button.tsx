import React from 'react';
import { Button as ButtonMaterial } from '@material-ui/core';
import { ButtonProps } from '../interfaces/UI';

export default function Button({
	color,
	variant,
	size,
	content,
	onClick,
	type,
}: ButtonProps) {
	return (
		<ButtonMaterial
			type={type}
			color={color}
			variant={variant}
			size={size}
			onClick={onClick}
		>
			{content}
		</ButtonMaterial>
	);
}
