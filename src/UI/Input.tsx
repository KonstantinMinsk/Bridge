import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputProps } from '../interfaces/UI';

export default function Input({ lable, variant, name, onChange }: InputProps) {
	return <TextField label={lable} variant={variant} name={name} onChange={onChange} />;
}
