import Styles from "./editarJogoStyles.module.css";
import JogoService from "../../../services/JogoService";
import Header from "../../shareds/header/headerComponent";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UsuarioService from "../../../services/UsuarioService";



export default function EditarJogoPage() {

  const location = useLocation();
  const [usuario, setUsuario] = useState({});


  var idUsuario = null;
  if (location.state) idUsuario = location.state.id;

  useEffect(() => {
    buscarUsuarioPorId(idUsuario);
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


  function editar(event) {
    event.preventDefault();

    const id = idUsuario
    const form = event.target;
    const titulo = form.titulo.value;
    const descricao = form.descricao.value;
    const preco = parseFloat(form.preco.value);
    const estoque = parseInt(form.estoque.value);
    var plataformas = form.plataformas.value;
    const nota = parseFloat(form.nota.value);
    const categoria = form.categoria.value;
    const urlImagem = form.urlImagem.value;

    plataformas = [plataformas]
    

    const jogo_cadastro = {
      id,
      titulo,
      descricao,
      preco,
      estoque,
      plataformas,
      nota,
      categoria,
      urlImagem,
    };

console.log(jogo_cadastro);

    JogoService.put(jogo_cadastro)
      .then((userData) => {
        alert("Jogo editado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao realizar cadastro do jogo:", error.message);
        alert("Erro ao realizar editar do jogo");
      });
  }

  return (
    <>
    
      <Header usuario={usuario} />
    <div className={Styles.conteiner}>
      <form onSubmit={editar}>
        <h1>Cadastrar Jogo</h1>
        <div>
          <label>Título</label>
          <input type="text" name="titulo" />
        </div>
        <div>
          <label>Descrição</label>
          <input name="descricao" />
        </div>
        <div>
          <label>Preço</label>
          <input type="number" name="preco" />
        </div>
        <div>
          <label>Estoque</label>
          <input type="number" name="estoque" />
        </div>
        <div>
          <label>Plataformas</label>
          <input type="text" name="plataformas" />
        </div>
        <div>
          <label>Nota</label>
          <input type="number" name="nota" />
        </div>
        <div>
          <label>Categoria</label>
          <input type="text" name="categoria" />
        </div>
        <div>
          <label>URL da Imagem</label>
          <input type="text" name="urlImagem" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </>
  );
}
