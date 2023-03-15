import { FC } from 'react';
import { Avatar } from '../../atoms/avatar';
import { Button } from '../../atoms/button';
import { Link } from '../../atoms/link';
import { SubTitle } from '../../atoms/sub-title';
import { Title } from '../../atoms/title';
import { COLORS } from '../../model/colors';
import './index.scss';

interface FriendSuggestionProps {
  userId: string;
  imageUrl?: string;
  userName: string;
  suggestionText: string;
  actionButtonText: string;
  handleClick: (userId: string) => void;
  avatarSize?: number;
  suggestionTextSize?: number;
}

export const FriendSuggestion: FC<FriendSuggestionProps> = ({
  userId,
  imageUrl,
  userName,
  suggestionText,
  actionButtonText,
  handleClick,
  avatarSize = 32,
  suggestionTextSize = 12,
}) => (
  <article className='friend-suggestion'>
    <div className='friend-suggestion__avatar'>
      <Link to={`/profile/${userId}`}>
        <Avatar
          src={imageUrl}
          alt={`Imagen de perfil del usuario ${userName}`}
          size={avatarSize}
        />
      </Link>
    </div>

    <div className='friend-suggestion__summary'>
      <Link to={`/profile/${userId}`}>
        <Title size={12}>{userName}</Title>
      </Link>
      <SubTitle size={suggestionTextSize}>{suggestionText}</SubTitle>
    </div>

    <div className='friend-suggestion__action'>
      <Button color={COLORS.PRIMARY} onClick={() => handleClick(userId)}>
        {actionButtonText}
      </Button>
    </div>
  </article>
);
