import { FC, useCallback } from 'react';
import { myProfile, suggestionsList } from '../../../constants/suggestions';
import { FeedTemplate } from '../../templates/FeedTemplate';

export const FeedPage: FC = () => {
  const onSuggestionClick = useCallback(
    (userId: string) => console.log('Se hace click en el usuario', userId),
    []
  );

  return (
    <FeedTemplate
      profile={myProfile}
      onProfileClick={onSuggestionClick}
      suggestions={suggestionsList}
      onSuggestionClick={onSuggestionClick}
    />
  );
};
