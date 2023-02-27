import { FC, ReactNode } from 'react';
import { COLORS } from '../../model/colors';
import './index.scss';

interface SubTitleProps {
  color?: COLORS;
  size?: number;
  children?: ReactNode;
}

export const SubTitle: FC<SubTitleProps> = ({
  children,
  color = COLORS.BASIC,
  size = 12,
}) => {
  return (
    <span
      className={`app-sub-title app-sub-title--${color}`}
      style={{ fontSize: `${size}px` }}
    >
      {children}
    </span>
  );
};
