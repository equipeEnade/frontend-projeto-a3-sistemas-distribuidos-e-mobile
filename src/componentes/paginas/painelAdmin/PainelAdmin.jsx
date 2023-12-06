import Styles from "./PainelAdminStyles.module.css";
import JogoService from "../../../services/JogoService";
import Header from "../../shareds/header/headerComponent";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UsuarioService from "../../../services/UsuarioService";

export default function PainelAdminPage() {
  const location = useLocation();
  const [usuario, setUsuario] = useState({});
  const [usuarios, setUsuarios] = useState([{}]);

  var idUsuario = null;
  if (location.state) idUsuario = location.state.id;

  useEffect(() => {
    buscarUsuarioPorId(idUsuario);
    buscarUsuarios()
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
            usuarios.map((usuario) => (
              <div key={usuario.id} className={Styles.usuario_box}>
                <div>
                  <h1>{"Nome: " + usuario.nome}</h1>
                  <h2>{"Email: " + usuario.email}</h2>
                  <h1>{"Senha: " + usuario.senha} R$</h1>
                  <h1>{"Role: " + usuario.role}</h1>
                  <button onClick={() => deletar(usuario.id)}>Deletar</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
