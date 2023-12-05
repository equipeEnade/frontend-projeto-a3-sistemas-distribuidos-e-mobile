import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginStyles.module.css";
import UsuarioService from "../../../services/UsuarioService";

// Use styles aqui como você estava fazendo anteriormente

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  function onSubmit(e) {
    e.preventDefault();

    if (login) {
      const email = document.getElementById("inputLoginEmail").value;
      const senha = document.getElementById("inputLoginSenha").value;
      logar({ email, senha });
    } else {
      const nome = document.getElementById("inputCadastroNome").value;
      const senha = document.getElementById("inputCadastroSenha").value;
      const email = document.getElementById("inputCadastroEmail").value;
      cadastrar({ email, senha, nome });
    }
  }
  function handleLoginToggle() {
    setLogin(!login);
  }

  function logar(usuarioLogin) {
    UsuarioService.login(usuarioLogin)
      .then((userData) => {
        navigate("/", { state: userData });
      })
      .catch((error) => {
        console.error("Erro ao realizar login:", error.message);
        alert("Erro ao realizar login");
      });
  }

  function cadastrar(usuarioCadastro) {
    UsuarioService.post(usuarioCadastro)
      .then((userData) => {
        alert("Seu cadastro foi feito com sucesso!")
        navigate("/", { state: userData });
      })
      .catch((error) => {
        console.error("Erro ao realizar cadastro:", error);
        alert("Estre email já foi utilizado, tente outro!")
      });
  }

  return (
    <div className={styles.container}>
      {login && (
        <div className={styles.form_login}>
          <form onSubmit={onSubmit} id="form_login">
            <h1>Fazer Login</h1>
            <div>
              <label>Email</label>
              <input type="email" id="inputLoginEmail" />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" id="inputLoginSenha" />
            </div>
            <h2 onClick={handleLoginToggle} className={styles.cursor}>
              Não tem uma conta ? crie agora!
            </h2>
            <button type="submit">Entrar</button>
          </form>
        </div>
      )}
      {!login && (
        <div className={styles.form_cadastro}>
          <form onSubmit={onSubmit} id="form_cadastro">
            <h1>Criar uma conta</h1>
            <div>
              <label htmlFor="inputCadastroEmail">Email</label>
              <input type="email" id="inputCadastroEmail" />
            </div>
            <div>
              <label htmlFor="inputCadastroSenha">Senha</label>
              <input type="password" id="inputCadastroSenha" />
            </div>
            <div>
              <label htmlFor="inputCadastroNome">Nome Completo</label>
              <input type="text" id="inputCadastroNome" />
            </div>
            <h2 onClick={handleLoginToggle} className={styles.cursor}>
              Já tem uma conta ? faça login
            </h2>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      )}
    </div>
  );
}
