import React from "react";
import styles from "./albumCard.module.scss";
import { motion } from 'framer-motion';

interface Props {
  cover: string;
  name: string;
  artist: string;
  year: string;
}

export const AlbumCard = ({ cover }: Props) => {
  return (
    <div className={styles.container}>
     <div className={styles.cover}>
         <div className={styles.imageContainer}>
          <div className={styles.puncture} />
          <img src={cover} />
         </div>
     </div>
     <div className={styles.info}>
            <span className={styles.albumName}>Brothers</span>
            <span className={styles.albumInfo}>Black Keys - 2018</span>
     </div>
    </div>
  );
};
