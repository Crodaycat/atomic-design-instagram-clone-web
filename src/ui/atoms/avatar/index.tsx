import { FC } from 'react';
import './index.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ src, alt, size = 32 }) => (
  <img
    className='avatar'
    loading='lazy'
    style={{ width: `${size}px`, height: `${size}px` }}
    src={src || 'https://www.w3schools.com/howto/img_avatar.png'}
    alt={alt || 'Avatar, foto de perfil.'}
  />
);
