import './App.css';
import { myProfile, suggestionsList } from './constants/suggestions';
import { ProfileAndSuggestions } from './ui/organisms/ProfilesAndSuggestions';

function App() {
  return (
    <div className='App'>
      <ProfileAndSuggestions
        profile={myProfile}
        profileActionText='Cambiar'
        profileHandleClick={(userId: string) =>
          console.log('Se hace click en el usuario principal', userId)
        }
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
