import './App.css';
import { suggestionsList } from './constants/suggestions';
import { FriendSuggestions } from './ui/organisms/FriendSuggestions';

function App() {
  return (
    <div className='App'>
      <FriendSuggestions
        title='Sugerencias para ti'
        actionText='Ver todo'
        actionUrl='/#'
        suggestions={suggestionsList}
        suggestionActionText='Seguir'
        onSuggestionClick={(userId: string) =>
          console.log('Se hace click en seguir al usuario con id', userId)
        }
      />
    </div>
  );
}

export default App;
