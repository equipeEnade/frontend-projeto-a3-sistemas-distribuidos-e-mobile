import styles from './headerStyles.module.css'
import imagem_default_perfil from '../../../assets/profile-image.jpg'
export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="http://" target="_blank" >Cadastrar Produtos</a></li>
                    <li><a href="http://" target="_blank" >Minhas Compras</a></li>
                </ul>
                <img src={imagem_default_perfil} alt="imagem de perfil" />
            </nav>
        </header>
    )
}