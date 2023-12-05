import Header from "../../shareds/header/headerComponent";
import Styles from "./homeStyles.module.css";
import { useState, useEffect } from "react"
import UsuarioService from "../../../services/UsuarioService"
import JogoService from "../../../services/JogoService"
import CompraService from "../../../services/CompraService"
import { useLocation } from 'react-router-dom';


export default function Home () {
  const location = useLocation();
  const idUsuario = location.state.id; 
  const [jogos, setJogos] = useState([{}])
  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    listarJogos()
    buscarUsuarioPorId(idUsuario)
  }, [idUsuario])

  function listarJogos(){
    JogoService.get().then((userData) => {
      setJogos(userData);
    })
    .catch((error) => {
      console.error('Erro ao buscar jogos:', error);
    });
  }

  function buscarUsuarioPorId(id){
    UsuarioService.findById(id).then((userData) => {
      setUsuario(userData);
    })
    .catch((error) => {
      console.error('Erro ao buscar usuario:', error);
    });
  }

  function comprar(id_produto) {
    const id_usuario = usuario.id;
    CompraService.post({id_usuario, id_produto}).then((userData) => {
      setUsuario(userData);
    })
    .catch((error) => {
      console.error('Erro ao buscar usuario:', error);
    });
  }

  return (
    <>
      <Header />
      <div className={Styles.container}>
        <section className={Styles.lista_com_todos_os_jogos}>
          {jogos.map((jogo, index) => (
            <div key={index} className={Styles.game_box}>
              <img src={jogo.urlImagem} alt="" />
              <div>
                <h1>{jogo.titulo}</h1>
                <h2>{jogo.descricao}</h2>
                <h1>{jogo.preco} R$</h1>
                <button onClick={() => comprar(jogo.id)}>Comprar</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
