import Head from "next/head";
import * as React from 'react';
import { AlbumCard } from "../components/AlbumCard";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import stagger from "../animations/stagger";
import fadeInUp from "../animations/fadeInUp";

Home.getInitialProps = async function() {
  const res = await fetch(
    "http://my-json-server.typicode.com/gabrielEloy/music-app/musics"
  );
  const albums = await res.json();
  return {
    albums
  };
};

export default function Home({albums}) {
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
        <motion.h1
          className={styles.home__title}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          Musics App
        </motion.h1>
        <motion.div variants={stagger} className={styles.albums}>
          {albums.map(({ cover, name, artist }) => (
            <motion.div className="album" key={cover} variants={fadeInUp()}>
              <AlbumCard name={name} artist={artist} cover={cover} />
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
