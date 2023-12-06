import styles from "./headerStyles.module.css";
import imagem_default_perfil from "../../../assets/profile-image.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const usuario = props.usuario;
  const navigate = useNavigate();


  function redirecionarComProps(path){
    navigate(path, { state: usuario });
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {usuario.role == "ADMIN" && (
            <li onClick={() => redirecionarComProps("/cadastrar-jogo")}>Cadastrar Produtos</li>
          )}
          {usuario.role == undefined && (
            <li>
              <Link to={"/login"}>Fazer login</Link>
            </li>
          )}
          {usuario.role == "USER" && <li onClick={() => redirecionarComProps("/meus-jogos")}>Minhas Compras</li>}
          <li onClick={() => redirecionarComProps("/")}>Listar Todos</li>
        </ul>
        <img src={imagem_default_perfil} alt="imagem de perfil" />
      </nav>
    </header>
  );
}
