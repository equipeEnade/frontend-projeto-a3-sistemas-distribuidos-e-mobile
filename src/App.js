import './App.css';
import CadastroJogoPage from './componentes/paginas/cadastroJogo/cadastroJogoPage';
import Home from './componentes/paginas/home/homePage';
import Login from './componentes/paginas/login/loginPage';
import { Routes, Route } from 'react-router-dom';
import MeusJogos from './componentes/paginas/meusJogos/MeusJogos';
import ShowGame from './componentes/paginas/showGame/showGame';
import EditarJogoPage from './componentes/paginas/editarJogo/editarJogoPage';
import PainelAdminPage from './componentes/paginas/painelAdmin/PainelAdmin';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar-jogo" element={<CadastroJogoPage />} />
      <Route path="/editar-jogo" element={<EditarJogoPage />} />
      <Route path="/meus-jogos" element={<MeusJogos />} />
      <Route path="/show-game" element={<ShowGame />} />
      <Route path="/painel-admin" element={<PainelAdminPage />} />
    </Routes>
  );
}

export default App;