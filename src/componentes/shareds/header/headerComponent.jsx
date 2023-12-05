import styles from './headerStyles.module.css'
import imagem_default_perfil from '../../../assets/profile-image.jpg'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to={'/'} >Cadastrar Produtos</Link></li>
                    <li><Link to={'/'} >Minhas Compras</Link></li>
                    <li><Link to={'/'} >Listar Todos</Link></li>
                </ul>
                <img src={imagem_default_perfil} alt="imagem de perfil" />
            </nav>
        </header>
    )
}