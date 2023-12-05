import './App.css';
import CadastroJogoPage from './componentes/paginas/cadastroJogo/cadastroJogoPage';
import Home from './componentes/paginas/home/homePage';
import Login from './componentes/paginas/login/loginPage';
import { Routes, Route } from 'react-router-dom';
import MeusJogos from './componentes/paginas/meusJogos/MeusJogos';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar-jogo" element={<CadastroJogoPage />} />
      <Route path="/meus-jogos" element={<MeusJogos />} />
    </Routes>
  );
}

export default App;