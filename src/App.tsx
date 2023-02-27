import './App.css';
import { Avatar } from './ui/atoms/avatar';
import { Button } from './ui/atoms/button';
import { SubTitle } from './ui/atoms/sub-title';
import { Title } from './ui/atoms/title';
import { COLORS } from './ui/model/colors';

function App() {
  return (
    <div className='App'>
      <Avatar size={56} />

      <Title color={COLORS.PRIMARY} size={14}>
        ¡Hola mundo!
      </Title>

      <SubTitle>azuladotoujours y 5 más siguen esta cuenta</SubTitle>

      <Button>Dejar de Seguir</Button>
      <hr />
      <Button color={COLORS.PRIMARY}>Seguir</Button>
    </div>
  );
}

export default App;
