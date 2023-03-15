import { FC } from 'react';
import { Suggestion } from '../../model/seggetion';
import { FriendSuggestion } from '../../molecules/FriendSuggestion';
import {
  FriendSuggestions,
  FriendSuggestionsProps,
} from '../FriendSuggestions';
import './index.scss';

interface ProfileAndSuggestionsProps extends FriendSuggestionsProps {
  profile: Suggestion;
  profileActionText: string;
  profileHandleClick: (userId: string) => void;
}

export const ProfileAndSuggestions: FC<ProfileAndSuggestionsProps> = ({
  profile,
  profileActionText,
  profileHandleClick,
  ...frienSuggetions
}) => (
  <section className='profile-and-suggestions'>
    <article className='profile-and-suggestions__profile'>
      <FriendSuggestion
        avatarSize={56}
        suggestionTextSize={14}
        {...profile}
        actionButtonText={profileActionText}
        handleClick={profileHandleClick}
      />
    </article>

    <article className='profile-and-suggestions__suggestions'>
      <FriendSuggestions {...frienSuggetions} />
    </article>
  </section>
);
