import Styles from "./PainelAdminStyles.module.css";
import JogoService from "../../../services/JogoService";
import Header from "../../shareds/header/headerComponent";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UsuarioService from "../../../services/UsuarioService";
import CompraService from "../../../services/CompraService";

export default function PainelAdminPage() {
  const location = useLocation();
  const [usuario, setUsuario] = useState({});
  const [usuarioEdicao, setUsuarioEdicao] = useState({});
  const [exibirEdit, setExibirEdit] = useState(false);
  const [mostrarEstatisticas, setMostrarEstatisticas] = useState(false);
  const [comprasUsuario, setComprasUsuario] = useState([{}]);
  const [dadosUsuario, setdadosUsuario] = useState({});

  const [usuarios, setUsuarios] = useState([{}]);

  var idUsuario = null;
  if (location.state) idUsuario = location.state.id;

  useEffect(() => {
    buscarUsuarioPorId(idUsuario);
    buscarUsuarios();
  }, [idUsuario]);

  function buscarUsuarioPorId(id) {
    UsuarioService.findById(id)
      .then((userData) => {
        setUsuario(userData);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuario:", error);
      });
  }

  function deletar(id_usuario) {
    UsuarioService.deleteById(id_usuario)
      .then((data) => {
        alert("Usuario Deletado");
        buscarUsuarios();
      })
      .catch((error) => {
        alert("Usuario não encontrado");
        console.error("Erro ao deletar usuario:", error);
      });
  }

  function toggleEditSection(usuario) {
    setExibirEdit(!exibirEdit);
    setUsuarioEdicao(usuario);
  }

  function preencherEdit(usuario) {
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");

    console.log("preencher");
    console.log(inputNome);
    console.log(inputEmail);
    console.log(inputSenha);
    if (inputNome && inputEmail && inputSenha) {
      inputNome.value = usuario.nome;
      inputEmail.value = usuario.email;
      inputSenha.value = usuario.senha;
    }
  }

  function editar(event) {
    event.preventDefault();

    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");

    const usuarioParaEditar = {
      id: usuarioEdicao.id,
      nome: inputNome.value,
      email: inputEmail.value,
      senha: inputSenha.value,
    };

    UsuarioService.put(usuarioParaEditar)
      .then((userData) => {
        alert("Usuario editado com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao realizar edição do Usuario:", error.message);
        alert("Erro ao realizar edição do Usuario");
      });
  }
  function estatisticas(usuario) {
    setMostrarEstatisticas(!mostrarEstatisticas);

    CompraService.getInfoGastosUsuario(usuario.id)
      .then((userData) => {
        setdadosUsuario(userData);
        console.log(userData);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do usuario:", error);
      });

    CompraService.getProdutosCompradosPorCliente(usuario.id)
      .then((userData) => {
        setComprasUsuario(userData);
      })
      .catch((error) => {
        console.error(
          "Erro ao buscar produtos comprados pelo do usuario:",
          error
        );
      });
  }
  function buscarUsuarios() {
    UsuarioService.get()
      .then((userData) => {
        setUsuarios(userData);
      })
      .catch((error) => {
        console.error("Erro ao buscar jogos:", error);
      });
  }
  return (
    <>
      <Header usuario={usuario} />
      <div className={Styles.conteiner}>
        <div className={Styles.box}>
          {usuarios.length > 0 &&
            usuarios.map((usuario, index) => (
              <div key={index} className={Styles.usuario_box}>
                <div>
                  <h1>{"Nome: " + usuario.nome}</h1>
                  <h2>{"Email: " + usuario.email}</h2>
                  <h2>{"Senha: " + usuario.senha}</h2>
                  <h2>{"Role: " + usuario.role}</h2>
                  <div className={Styles.butoes}>
                    <button onClick={() => deletar(usuario.id)}>Deletar</button>
                    {usuario.role == "USER" && (
                      <button onClick={() => estatisticas(usuario)}>
                        Estatisticas
                      </button>
                    )}
                    <button onClick={() => toggleEditSection(usuario)}>
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {exibirEdit && (
          <div className={Styles.edit_box}>
            <form id="form" onSubmit={editar}>
              <h1>Editar Usuario</h1>
              <div>
                <label>Nome</label>
                <input id="nome" type="text" name="nome" />
              </div>
              <div>
                <label>Email</label>
                <input id="email" type="email" name="email" />
              </div>
              <div>
                <label>Senha</label>
                <input id="senha" type="password" name="senha" />
              </div>
              <button type="submit">Editar</button>
            </form>
          </div>
        )}

        {mostrarEstatisticas && (
          <div className={Styles.estatisticas_box}>
            <div className={Styles.dados}>
              <h1>Estatisticas:</h1>
              <h2>Gasto total: {dadosUsuario.valor_total_gasto}</h2>
              <h2>Gasto medio: {dadosUsuario.valor_medio_gasto}</h2>
              <h2>Produtos comprados: {dadosUsuario.numero_itens_comprados}</h2>
            </div>
            <div className={Styles.lista_produtos}>
              {comprasUsuario.map((produto, index) => (
                <div key={index} className={Styles.produto_box}>
                  <img src={produto.urlImagem} alt={produto.titulo} />
                  <div>
                    <h1>{"Titulo: " + produto.titulo}</h1>
                    <h2>{produto.descricao}</h2>
                    <h2>{"Nota: " + produto.nota}</h2>
                    <h1>{"Preço: " + produto.preco} R$</h1>
                    <h1>{"Categorias: " + produto.categorias}</h1>
                    <h1>{"Plataformas: " + produto.plataformas}</h1>
                    <h1>{produto.comentarios}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
