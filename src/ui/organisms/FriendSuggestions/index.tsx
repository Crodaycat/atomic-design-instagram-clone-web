import { FC } from 'react';
import { Link } from '../../atoms/link';
import { SubTitle } from '../../atoms/sub-title';
import { Suggestion } from '../../model/seggetion';
import { FriendSuggestion } from '../../molecules/FriendSuggestion';

interface FriendSuggestionsProps {
  title?: string;
  actionText?: string;
  actionUrl?: string;
  suggestions?: Suggestion[];
  suggestionActionText: string;
  onSuggestionClick: (userId: string) => void;
}

export const FriendSuggestions: FC<FriendSuggestionsProps> = ({
  title = 'Sugerencias para ti',
  actionText = 'Ver todo',
  actionUrl = '/#',
  suggestions = [],
  suggestionActionText = 'Seguir',
  onSuggestionClick = () => null,
}) => (
  <section>
    <header>
      <SubTitle>{title}</SubTitle>

      <Link to={actionUrl}>{actionText}</Link>
    </header>

    {suggestions.map((suggestion) => (
      <FriendSuggestion
        key={suggestion.userId}
        {...suggestion}
        actionButtonText={suggestionActionText}
        handleClick={onSuggestionClick}
      />
    ))}
  </section>
);
