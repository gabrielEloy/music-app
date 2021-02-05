import Head from "next/head";
import { AlbumCard } from "../components/AlbumCard";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import stagger from "../animations/stagger";
import fadeInUp from "../animations/fadeInUp";

const mockedCover = [
  {
    cover:
      "https://portalfamosos.com.br/wp-content/uploads/2020/07/EKkYukOUUAEdCwR.png",
    name: "when we all fall asleep where do we go",
    artist: "Billie Eilish - 2019",
  },
  {
    cover:
      "http://loggado.com/wp-content/uploads/2017/06/Lorde-Melodrama-2.jpg",
    name: "Melodrama",
    artist: "Lorder - 2017",
  },
  {
    cover: "https://images-na.ssl-images-amazon.com/images/I/71sHlq8VDQL.jpg",
    name: "25",
    artist: "Adelle - 2015",
  },
  {
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/71DX9fQhSHL._SL1212_.jpg",
    name: "Beerbongs & bentleys",
    artist: "Post Malone - 2018",
  },
  {
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/71xNOkPaOHL._AC_SX425_.jpg",
    name: "If You're Reading This It's Too Late",
    artist: "Drake - 2015",
  },
  {
    cover:
      "http://lojasaraiva.vteximg.com.br/arquivos/ids/2683306/1002918405.jpg?v=637020949757800000",
    name: "Beauty Behind the Madness",
    artist: "The Weeknd - 2015",
  },
  {
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/612luc2DEML._AC_SL1000_.jpg",
    name: "Future Nostalgia",
    artist: "Dua Lipe - 2019",
  },
];

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={styles.container}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className={styles.main}
      >
        <h1>Musics App</h1>
        <motion.div variants={stagger} className={styles.albums}>
          {mockedCover.map(({ cover, name, artist }) => (
            <motion.div
              className="album"
              key={cover}
              variants={fadeInUp()}
            >
              <AlbumCard name={name} artist={artist} cover={cover} />
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <motion.img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </motion.div>
  );
}
