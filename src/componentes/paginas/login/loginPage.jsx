import { useState } from "react";
import styles from "./loginStyles.module.css";

// Use styles aqui como você estava fazendo anteriormente

export default function Login() {
  const [login, setLogin] = useState(true);

  function onSubmit() {
    var event_login = document.getElementById("form_login");
    var event_cadastro = document.getElementById("form_cadastro");
    event_login.preventDefault();
    event_cadastro.preventDefault();
    console.log("enviou");
  }
  function handleLoginToggle(){
    setLogin(!login);
  };

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
            <h2 onClick={handleLoginToggle} className={styles.cursor}>Não tem uma conta ? crie agora!</h2>
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
          <div>
            <label htmlFor="inputCadastroAniversario">Data de nascimento</label>
            <input type="date" id="inputCadastroAniversario" />
          </div>
          <h2 onClick={handleLoginToggle} className={styles.cursor}>Já tem uma conta ? faça login</h2>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      )}
    </div>
  );
}
