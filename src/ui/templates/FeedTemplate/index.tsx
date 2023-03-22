import { FC } from 'react';
import { Suggestion } from '../../model/seggetion';
import { ProfileAndSuggestions } from '../../organisms/ProfilesAndSuggestions';
import './index.scss';

interface FeedTemplateProps {
  profile: Suggestion;
  suggestions: Suggestion[];
  onProfileClick: (userId: string) => void;
  onSuggestionClick: (userId: string) => void;
}

export const FeedTemplate: FC<FeedTemplateProps> = ({
  profile,
  suggestions,
  onProfileClick,
  onSuggestionClick,
}) => (
  <main className='feed'>
    <nav className='feed__nav'></nav>

    <section className='feed__content'></section>

    <aside className='feed__aside'>
      <ProfileAndSuggestions
        profile={profile}
        suggestions={suggestions}
        profileHandleClick={onProfileClick}
        onSuggestionClick={onSuggestionClick}
        profileActionText='Cambiar'
        title='Sugerencias para ti'
        actionText='Ver todo'
        actionUrl='/#'
        suggestionActionText='Seguir'
      />
    </aside>
  </main>
);
