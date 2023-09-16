import Banner from "components/Banner";
import styles from "./Player.module.css";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from 'json/db.json';
import NaoEncontrado from "pages/NaoEncontrado";


function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
    
  });

  if (!video) {
    return <NaoEncontrado />
  }

  console.log(video);
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>

      <section className={styles.container}>
        <iframe
        width="560"
        height="315"
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </>
  );
}

export default Player;
