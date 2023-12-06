import Header from "../../shareds/header/headerComponent";
import Styles from "./homeStyles.module.css";
import { useState, useEffect } from "react";
import UsuarioService from "../../../services/UsuarioService";
import JogoService from "../../../services/JogoService";
import CompraService from "../../../services/CompraService";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [jogos, setJogos] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [produto, setProduto] = useState({});
  var idUsuario = null;
  if (location.state) idUsuario = location.state.id;

  useEffect(() => {
    buscarUsuarioPorId(idUsuario);
    listarJogos();
  }, [idUsuario]);

  function listarJogos() {
    JogoService.get()
      .then((userData) => {
        setJogos(userData);
      })
      .catch((error) => {
        console.error("Erro ao buscar jogos:", error);
      });
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
  async function verificarEstoque(id_produto) {
    try {
      const produtoData = await JogoService.findById(id_produto);
      setProduto(produtoData);
      return produtoData.estoque > 0 ? true : false;
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      return false;
    }
  }

  async function comprar(id_produto) {
    if (idUsuario == null) return alert("Faça Login para realizar uma compra");
    const temEstoque = await verificarEstoque(id_produto);
    if (temEstoque != true) return alert("Este produto não esta em estoque");
    setProduto(await buscarProdutoPorId(id_produto));
    const id_usuario = usuario.id;

    CompraService.post({ id_usuario, id_produto })
      .then((compraData) => {
        alert(
          `Parabéns ${usuario.nome} sua compra foi realizada com sucesso!\n
          Valor: ${compraData.preco}\n
          `
        );
      })
      .catch((error) => {
        console.error("Erro ao realizar compra:", error);
        alert("Erro ao realizar compra");
      });
  }

  async function verMais(id_produto) {
    var produtoShow = await buscarProdutoPorId(id_produto);
    console.log(produtoShow);
    navigate("/show-game", { state: "faffsaf" });
  }

  function deletar(id) {
    JogoService.deleteById(id)
      .then((data) => {
        alert("Jogo Deletado");
        listarJogos();
      })
      .catch((error) => {
        alert("Jogo não encontrado");
        console.error("Erro ao deletar jogo:", error);
      });
  }

  function editar(jogo) {
    navigate("/editar-jogo", { state: jogo });

  }

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
                  <h1>{"Titulo: " + jogo.titulo}</h1>
                  <h2>{jogo.descricao}</h2>
                  <h2>{"Nota: " + jogo.nota}</h2>
                  <h1>{"Preço: " + jogo.preco} R$</h1>
                  <h1>{"Categorias: " + jogo.categorias}</h1>
                  <h1>{"Plataformas: " + jogo.plataformas}</h1>
                  <h1>{jogo.comentarios}</h1>
                  <div className={Styles.butoes}>
                    {usuario.role != "ADMIN" && (
                      <button onClick={() => comprar(jogo.id)}>Comprar</button>
                    )}
                    {usuario.role == "ADMIN" && (
                      <div className={Styles.butoes}>
                        <button onClick={() => deletar(jogo.id)}>
                          Deletar
                        </button>
                        <button onClick={() => editar(jogo)}>Editar</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
}
