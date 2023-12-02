import Header from "../../shareds/header/headerComponent";
import Styles from "./homeStyles.module.css";

export default function   () {
  var jogos = [
    {
      titulo: "Cyberpunk 77",
      descricao:
        "Jogo de ação com cyborg, bugs, carros, armas e tudo que é de bom",
      plataformas: ["Steam", "Epic Games"],
      generos: ["Ação", "RPG"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Doki doki literature club",
      descricao: "Jogo de romance com plot twist bizarro",
      plataformas: ["Steam", "Epic Games", "Nintendo"],
      generos: ["Romance", "Terror"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Sonic",
      descricao: "Um boneco azul que corre bastante",
      plataformas: ["Nintendo"],
      generos: ["Ação", "Corrida"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Mario",
      descricao:
        "Um encanador que fica pulando em tartaruga e outros animais silvestres",
      plataformas: ["Nintendo"],
      generos: ["Ação"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Cyberpunk 77",
      descricao:
        "Jogo de ação com cyborg, bugs, carros, armas e tudo que é de bom",
      plataformas: ["Steam", "Epic Games"],
      generos: ["Ação", "RPG"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Doki doki literature club",
      descricao: "Jogo de romance com plot twist bizarro",
      plataformas: ["Steam", "Epic Games", "Nintendo"],
      generos: ["Romance", "Terror"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Sonic",
      descricao: "Um boneco azul que corre bastante",
      plataformas: ["Nintendo"],
      generos: ["Ação", "Corrida"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Mario",
      descricao:
        "Um encanador que fica pulando em tartaruga e outros animais silvestres",
      plataformas: ["Nintendo"],
      generos: ["Ação"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Cyberpunk 77",
      descricao:
        "Jogo de ação com cyborg, bugs, carros, armas e tudo que é de bom",
      plataformas: ["Steam", "Epic Games"],
      generos: ["Ação", "RPG"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Doki doki literature club",
      descricao: "Jogo de romance com plot twist bizarro",
      plataformas: ["Steam", "Epic Games", "Nintendo"],
      generos: ["Romance", "Terror"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Sonic",
      descricao: "Um boneco azul que corre bastante",
      plataformas: ["Nintendo"],
      generos: ["Ação", "Corrida"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
    {
      titulo: "Mario",
      descricao:
        "Um encanador que fica pulando em tartaruga e outros animais silvestres",
      plataformas: ["Nintendo"],
      generos: ["Ação"],
      imagem:
        "https://sm.ign.com/t/ign_br/cover/c/cyberpunk-/cyberpunk-2077_q3fy.128.jpg",
      preco: 67.33,
      estoque: 10,
    },
  ];

  function comprar(nomeJogo) {
    console.log(nomeJogo);
  }

  return (
    <>
      <Header />
      <div className="container">
        <section className={Styles.lista_com_todos_os_jogos}>
          {jogos.map((jogo, index) => (
            <div key={index} className={Styles.game_box}>
              <img src={jogo.imagem} alt="" />
              <div>
                <h1>{jogo.titulo}</h1>
                <h2>{jogo.descricao}</h2>
                <h1>{jogo.preco} R$</h1>
                {/* Utiliza uma função anônima para passar o nome do jogo para a função comprar */}
                <button onClick={() => comprar(jogo.titulo)}>Comprar</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
