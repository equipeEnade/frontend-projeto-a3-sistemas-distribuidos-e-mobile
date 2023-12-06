import { useLocation, useNavigate } from "react-router-dom";

export default function ShowGame() {
    const location = useLocation();
    console.log(location);
    var jogo
    if (location.state) jogo = location.state;
    console.log(jogo);
  return (
    <>
      <h1>{"jogo.title"}</h1>
    </>
  );
}
