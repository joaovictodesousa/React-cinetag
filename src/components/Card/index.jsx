import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    console.log(id, titulo, capa)
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}> 
            {/* Esse id serve para mandar de pagina com o id do card que foi clicado */}
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>

    )
}

export default Card;