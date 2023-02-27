import { FC, ReactNode } from 'react';
import { COLORS } from '../../model/colors';
import './index.scss';

interface ButtonProps {
  color?: COLORS;
  onClick?: () => void;
  children?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
}

export const Button: FC<ButtonProps> = ({
  color = COLORS.BASIC,
  onClick = () => null,
  children,
  type = 'button',
}) => (
  <button
    className={`app-button app-button--${color}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);
