import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputProps } from '../interfaces/UI';

export default function Input({ label, variant, name, onChange }: InputProps) {
	return <TextField label={label} variant={variant} name={name} onChange={onChange} />;
}
