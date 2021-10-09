import React from 'react';

export interface ButtonProps {
  color: 'primary' | 'secondary';
  variant: 'contained';
  content: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClick?: any;
  type?: 'button' | 'reset' | 'submit' | undefined
}
