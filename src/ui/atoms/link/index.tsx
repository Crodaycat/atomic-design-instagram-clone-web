import { FC, ReactNode } from 'react';
import { COLORS } from '../../model/colors';
import './index.scss';

interface LinkProps {
  color?: COLORS;
  to?: string;
  size?: number;
  target?: '_blank' | '_parent' | '_self' | '_top';
  children?: ReactNode;
}

export const Link: FC<LinkProps> = ({
  color = COLORS.BASIC,
  to = '#',
  size = 12,
  target = '_self',
  children,
}) => (
  <a
    href={to}
    target={target}
    className={`link link--${color}`}
    style={{ fontSize: `${size}px` }}
  >
    {children}
  </a>
);
