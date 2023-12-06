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
    // buscarCompras(idUsuario);
    buscarProdutos();
  }, [idUsuario]);

  async function buscarCompras(id) {
    try {
      const comprasFeitas = await CompraService.findComrasByIdUsuario(id);
      setCompras(comprasFeitas);
      return comprasFeitas;
    } catch (error) {
      console.error("Erro ao buscar compras:", error);
    }
  }

  async function buscarProdutos() {
    const _compras = await buscarCompras(idUsuario);
    try {
      const _jogos = [...jogos];

      for (const compra of _compras) {
        const jogoEncontrado = await JogoService.findById(compra.id_produto);
        _jogos.push(jogoEncontrado);
      }

      setJogos(_jogos);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  async function buscarProduto(compra) {
    try {
      const jogoEncontrado = await JogoService.findById(compra.id_produto);
      return jogoEncontrado
    } catch (error) {
      console.error("Erro ao buscar jogo", error);
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

  function buscarProdutoPorId(id) {
    JogoService.findById(id)
      .then((produtoData) => {
        return produtoData;
      })
      .catch((error) => {
        console.error("Erro ao buscar produto:", error);
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
                <img src={jogo.urlImagem} alt="" />
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
