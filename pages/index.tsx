import Head from "next/head";
import { AlbumCard } from "../components/AlbumCard";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import stagger from "../animations/stagger";

const mockedCover = [
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-450-Paul-mcCartney-RAM.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-449-WhiteStripesELEPHANT.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-448-Otis-Redding-Dictionary-of-Soul.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-447-bad-bunny-X100pre.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-446-Alice-Coltrane-Journey-in-Satchidanada.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-445-yes-Close-to-the-Edge.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-444-Fiona-Apple-Extraordinary-Machine.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-443-David-Bowie-Scary-Monsters.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-442-Weeknd-beauty-behind-the-madness.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-441-Britney-Spears-Blackout.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-440-Loretta-Lynn-Coal-Miner_s-Daughter.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-439-James-Brown-Sex-Machine.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-438-Blur-Parklife.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-437-Primal-Scream-Screamadelica.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-436-Tupac-all-Eyez-on-Me.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-435-Pet-Shop-Boys-Actually.jpg?w=800",
  },
  {
    cover:
      "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-434-Pavement-CROOKED-RAIN.jpg?w=800",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
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
          {mockedCover.map(({ cover }) => (
            <div className="album" key={cover}>
              <AlbumCard cover={cover} />
            </div>
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
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
