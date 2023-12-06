import Header from "../../shareds/header/headerComponent";
import Styles from "./meusJogosStyles.module.css";
import { useState, useEffect } from "react";
import UsuarioService from "../../../services/UsuarioService";
import JogoService from "../../../services/JogoService";
import CompraService from "../../../services/CompraService";
import { useLocation } from "react-router-dom";

export default function MeusJogos(props) {
  const location = useLocation();
  const [jogos, setJogos] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [compras, setCompras] = useState([]);
  var idUsuario = null;
  if (location.state) idUsuario = location.state.id;

  useEffect(() => {
    buscarUsuarioPorId(idUsuario);
    buscarProdutos(idUsuario);
  }, [idUsuario]);

  async function buscarProdutos(id) {
    try {
      const comprasFeitas = await CompraService.findComrasByIdUsuario(id);
      setJogos(comprasFeitas);
      return comprasFeitas;
    } catch (error) {
      console.error("Erro ao buscar compras:", error);
    }
  }

  function buscarUsuarioPorId(id) {
    UsuarioService.findById(id)
      .then((userData) => {
        setUsuario(userData);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuario:", error);
      });
  }

  function deletarCompra() {}
  return (
    <>
      <Header usuario={usuario} />
      <div className={Styles.container}>
        <section className={Styles.lista_com_todos_os_jogos}>
          {jogos.length > 0 &&
            jogos.map((jogo, index) => (
              <div key={index} className={Styles.game_box}>
                <img src={jogo.urlImagem} alt={jogo.titulo} />
                <div>
                  <h1>{jogo.titulo}</h1>
                  <h2>{jogo.descricao}</h2>
                  <h1>{jogo.preco} R$</h1>
                  <h1>{jogo.categorias}</h1>
                  <h1>{jogo.plataformas}</h1>
                  <h1>{jogo.comentarios}</h1>
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
}
