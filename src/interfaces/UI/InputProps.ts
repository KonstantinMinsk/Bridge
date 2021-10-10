import React from 'react';

export interface InputProps {
  label?: React.ReactNode;
  variant: 'outlined';
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
