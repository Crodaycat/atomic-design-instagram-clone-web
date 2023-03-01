import './App.css';
import { FriendSuggestionItem } from './ui/molecules/FriendSuggestionItem';

function App() {
  return (
    <div className='App'>
      <FriendSuggestionItem
        userId='123'
        userName='Carolina'
        suggestionText='Sugerencias para ti'
        imageUrl='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg'
        actionButtonText='Seguir'
        handleClick={() => console.log('Le dio click al botón de acción')}
      />
    </div>
  );
}

export default App;
