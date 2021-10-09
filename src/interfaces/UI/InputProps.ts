import React from 'react';

export interface InputProps {
  lable?: React.ReactNode;
  variant: 'outlined';
  name: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
