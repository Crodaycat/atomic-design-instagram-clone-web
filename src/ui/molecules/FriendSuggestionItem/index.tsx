import { FC } from 'react';
import { Avatar } from '../../atoms/avatar';
import { Button } from '../../atoms/button';
import { Link } from '../../atoms/link';
import { SubTitle } from '../../atoms/sub-title';
import { Title } from '../../atoms/title';
import { COLORS } from '../../model/colors';
import './index.scss';

interface FriendSuggestionItemProps {
  userId: string;
  imageUrl?: string;
  userName: string;
  suggestionText: string;
  actionButtonText: string;
  handleClick: () => void;
}

export const FriendSuggestionItem: FC<FriendSuggestionItemProps> = ({
  userId,
  imageUrl,
  userName,
  suggestionText,
  actionButtonText,
  handleClick,
}) => (
  <article>
    <div>
      <Link to={`/profile/${userId}`}>
        <Avatar
          src={imageUrl}
          alt={`Imagen de perfil del usuario ${userName}`}
          size={32}
        />
      </Link>
    </div>

    <div>
      <Link to={`/profile/${userId}`}>
        <Title size={12}>{userName}</Title>
      </Link>
      <SubTitle size={12}>{suggestionText}</SubTitle>
    </div>

    <div>
      <Button color={COLORS.PRIMARY} onClick={handleClick}>
        {actionButtonText}
      </Button>
    </div>
  </article>
);
